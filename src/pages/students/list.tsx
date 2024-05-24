import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  DateField,
  DeleteButton,
  EditButton,
  EmailField,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React from "react";

export const StudentList = () => {
  const { dataGridProps } = useDataGrid();

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "id",
        flex: 0.5,
        headerName: "ID",
        type: "number",
        minWidth: 50,
        maxWidth: 100,
        align: "left",
        headerAlign: "left",
      },
      {
        field: "firstname",
        flex: 1,
        headerName: "First Name",
        minWidth: 150,
      },
      {
        field: "lastname",
        flex: 1,
        headerName: "Last Name",
        minWidth: 150,
      },
      {
        field: "dateofbirth",
        flex: 1,
        headerName: "Date of Birth",
        minWidth: 150,
        renderCell: function render({ value }) {
          return <DateField value={value} />;
        },
      },
      {
        field: "gender",
        flex: 0.5,
        headerName: "Gender",
        maxWidth: 100,
      },
      {
        field: "email",
        flex: 1.5,
        headerName: "Email",
        minWidth: 200,
        renderCell: function render({ value }) {
          return <EmailField value={value} />;
        },
      },
      {
        field: "phone",
        flex: 1,
        headerName: "Phone",
        minWidth: 150,
      },
      {
        field: "address",
        flex: 1.5,
        headerName: "Address",
        minWidth: 200,
      },
      {
        field: "actions",
        flex: 0.7,
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
        minWidth: 100,
      },
    ],
    []
  );

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <List>
        <DataGrid
          {...dataGridProps}
          getRowId={(row) => row?.id}
          columns={columns}
          autoHeight
          disableColumnMenu
        />
      </List>
    </Box>
  );
};
