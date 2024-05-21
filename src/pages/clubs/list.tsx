import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useList, useNavigation } from "@refinedev/core";
import { useEffect, useState } from "react";
import { TableType } from "../../types/types";

type TClubs = TableType<"clubs">;

export const ClubList = () => {
  const [clubs, setClubs] = useState<TClubs[]>([]);
  const { data } = useList({
    resource: "clubs",
  });

  const { show } = useNavigation();

  useEffect(() => {
    if (data) {
      setClubs(data.data as TClubs[]);
    }
  }, [data]);

  return (
    <Grid container spacing={2}>
      {clubs.map((club) => (
        <Grid item key={club.id} xs={12} md={6} lg={3}>
          <Card>
            <CardActionArea onClick={() => show("clubs", club.id)}>
              <CardMedia
                component="img"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {club.clubname}
                </Typography>
                <Typography noWrap variant="body2" color="text.secondary">
                  {club.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
