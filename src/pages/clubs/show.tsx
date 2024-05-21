import { Show } from "@/components/crud/show";
import { convertDateFormat, convertTimeFormat } from "@/lib/utils";
import { TableType } from "@/types/types";
import { Card, CardContent, Grid, List, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useShow } from "@refinedev/core";
import {
  DateField,
  DeleteButton,
  EditButton,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import { useMemo } from "react";

export const ClubShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data as TableType<"clubs">;

  const { dataGridProps } = useDataGrid({
    resource: "members",
  });

  const columns = useMemo<GridColDef[]>(
    () => [
      {
        field: "studentid",
        flex: 1,
        headerName: "Student ID",
        type: "number",
        align: "left",
        headerAlign: "left",
      },
      {
        field: "role",
        flex: 1,
        headerName: "Role",
      },
      {
        field: "joindate",
        flex: 1,
        headerName: "Join Date",

        renderCell: function render({ value }) {
          return <DateField value={value} />;
        },
      },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton hideText recordItemId={row.id} />
              <ShowButton hideText recordItemId={row.id} />
              <DeleteButton hideText recordItemId={row.id} />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
      },
    ],
    []
  );

  return (
    <>
      {!isLoading ? (
        <Show canDelete={false} title={record.clubname} isLoading={isLoading}>
          <Grid container columnSpacing={3}>
            <Grid item xs={12} md={12} lg={3}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {record.clubname}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Meeting: {record.meetingday} @{" "}
                    {convertTimeFormat(
                      (record.meetingtime as string) || "00:00"
                    )}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Room Number: {record.roomnumber}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Founded Date:{" "}
                    {convertDateFormat(
                      (record.createdat as string) || new Date().toISOString()
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={12} lg={9}>
              <List>
                <DataGrid
                  {...dataGridProps}
                  columns={columns}
                  autoHeight
                  pageSizeOptions={[5, 10, 20]}
                />
              </List>
            </Grid>
          </Grid>
        </Show>
      ) : null}
    </>
  );
};
