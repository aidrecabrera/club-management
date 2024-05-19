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
        flex: 1,
        headerName: "ID",
        type: "number",
        minWidth: 100,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "firstname",
        flex: 1,
        headerName: "First Name",
        minWidth: 200,
      },
      {
        field: "lastname",
        flex: 1,
        headerName: "Last Name",
        minWidth: 200,
      },
      {
        field: "dateofbirth",
        flex: 1,
        headerName: "Date of Birth",
        minWidth: 250,
        renderCell: function render({ value }) {
          return <DateField value={value} />;
        },
      },
      {
        field: "gender",
        flex: 1,
        headerName: "Gender",
        minWidth: 200,
      },
      {
        field: "email",
        flex: 1,
        headerName: "Email",
        minWidth: 250,
        renderCell: function render({ value }) {
          return <EmailField value={value} />;
        },
      },
      {
        field: "phone",
        flex: 1,
        headerName: "Phone",
        minWidth: 200,
      },
      {
        field: "address",
        flex: 1,
        headerName: "Address",
        minWidth: 200,
      },
      {
        field: "createdate",
        flex: 1,
        headerName: "Create Date",
        minWidth: 250,
        renderCell: function render({ value }) {
          return <DateField value={value} />;
        },
      },
      {
        field: "updatedate",
        flex: 1,
        headerName: "Updated Date",
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
      <DataGrid
        {...dataGridProps}
        getRowId={(row) => row?.id}
        columns={columns}
        autoHeight
      />
    </List>
  );
};
