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
        headerName: "Id",
        type: "number",
        minWidth: 50,
      },
      {
        field: "clubname",
        flex: 1,
        headerName: "Clubname",
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
        headerName: "Advisorid",
        type: "number",
        minWidth: 200,
      },
      {
        field: "meetingday",
        flex: 1,
        headerName: "Meetingday",
        minWidth: 200,
      },
      {
        field: "meetingtime",
        flex: 1,
        headerName: "Meetingtime",
        minWidth: 200,
      },
      {
        field: "roomnumber",
        flex: 1,
        headerName: "Roomnumber",
        type: "number",
        minWidth: 200,
      },
      {
        field: "createdat",
        flex: 1,
        headerName: "Createdat",
        minWidth: 250,
        renderCell: function render({ value }) {
          return <DateField value={value} />;
        },
      },
      {
        field: "updatedat",
        flex: 1,
        headerName: "Updatedat",
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
