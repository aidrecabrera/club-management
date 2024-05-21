import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useList } from "@refinedev/core";
import { useEffect, useState } from "react";
import { TableType } from "../../types/types";

type TClubs = TableType<"clubs">;

export const ClubList = () => {
  const [clubs, setClubs] = useState<TClubs[]>([]);
  const { data } = useList({
    resource: "clubs",
  });

  useEffect(() => {
    if (data) {
      setClubs(data.data as TClubs[]);
    }
  }, [data]);

  return (
    <Grid container spacing={2}>
      {clubs.map((club) => (
        <Grid item key={club.id} xs={12} md={6} lg={4}>
          <Card>
            <CardActionArea>
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
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
