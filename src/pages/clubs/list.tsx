import { getRandomImageUrl } from "@/lib/utils";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Pagination,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useList, useNavigation } from "@refinedev/core";
import { CreateButton } from "@refinedev/mui";
import { useEffect, useState } from "react";
import { TableType } from "../../types/types";

type TClubs = TableType<"clubs">;

export const ClubList = () => {
  const [clubs, setClubs] = useState<TClubs[]>([]);
  const [current, setCurrent] = useState(1);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly TClubs[]>([]);
  const [search, setSearch] = useState("");
  const loading = open && options.length === 0;
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const { data, isLoading } = useList({
    resource: "clubs",
    pagination: {
      current,
      pageSize: 8,
    },
    filters: [{ field: "clubname", operator: "contains", value: search }],
  });

  const { data: clubOptions, isLoading: optionsLoading } = useList({
    resource: "clubs",
    pagination: { current: 1, pageSize: 1000 },
    meta: {
      fields: ["id", "clubname"],
    },
  });

  const { show, create } = useNavigation();

  useEffect(() => {
    if (data) {
      setClubs(data.data as TClubs[]);
    }
    if (clubOptions) {
      setOptions(clubOptions.data as TClubs[]);
    }
  }, [data, clubOptions]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const filteredOptions = options.filter((option) =>
    option.clubname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ padding: 2 }}>
      <Grid
        container
        spacing={2}
        justifyContent={isMobile ? "center" : "space-between"}
        alignItems="center"
      >
        <Grid item xs={12} sm="auto">
          <Autocomplete
            id="club-search"
            sx={{ width: isMobile ? "100%" : 300 }}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            onInputChange={(event, value) => {
              setSearch(value);
              setOpen(true); // Reopen autocomplete on input change
            }}
            isOptionEqualToValue={(option, value) =>
              option.clubname === value.clubname
            }
            getOptionLabel={(option) => option.clubname}
            options={filteredOptions}
            loading={optionsLoading}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Clubs"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {optionsLoading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
        </Grid>
        <Grid item>
          <CreateButton />
        </Grid>
      </Grid>
      {isLoading ? (
        <Box display="flex" justifyContent="center" marginTop={2}>
          <CircularProgress />
        </Box>
      ) : clubs.length === 0 ? (
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Typography variant="h6">No Clubs Registered</Typography>
        </Box>
      ) : (
        <Grid container spacing={2} marginTop={2}>
          {clubs.map((club) => (
            <Grid item key={club.id} xs={12} md={6} lg={3}>
              <Card>
                <CardActionArea onClick={() => show("clubs", club.id)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={getRandomImageUrl()}
                    alt="club image"
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
      )}
      {clubs.length === 0 ?? (
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Pagination
            count={data && data.total ? Math.ceil(data.total / 8) : 1}
            page={current}
            onChange={(_, page) => setCurrent(page)}
            sx={{ width: "auto" }}
          />
        </Box>
      )}
    </Box>
  );
};
