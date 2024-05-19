import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React from "react";

export const ClubList = () => {
  const { dataGridProps } = useDataGrid();

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "id",
        headerName: "ID",
        minWidth: 50,
      },
      {
        field: "clubname",
        flex: 1,
        headerName: "Club Name",
        minWidth: 200,
      },
      {
        field: "description",
        flex: 1,
        headerName: "Description",
        minWidth: 200,
      },
      {
        field: "advisorid",
        flex: 1,
        headerName: "Advisor ID",
        minWidth: 200,
      },
      {
        field: "meetingday",
        flex: 1,
        headerName: "Meeting Day",
        minWidth: 200,
      },
      {
        field: "meetingtime",
        flex: 1,
        headerName: "Meeting Time",
        minWidth: 200,
      },
      {
        field: "roomnumber",
        flex: 1,
        headerName: "Room Number",
        minWidth: 200,
      },
      {
        field: "createdat",
        flex: 1,
        headerName: "Create Date",
        minWidth: 250,
        renderCell: function render({ value }) {
          return <DateField value={value} />;
        },
      },
      {
        field: "updatedat",
        flex: 1,
        headerName: "Update Date",
        minWidth: 250,
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
        minWidth: 80,
      },
    ],
    []
  );

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};
