import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useMany } from "@refinedev/core";
import {
  DeleteButton,
  EditButton,
  EmailField,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React from "react";

export const InstructorList = () => {
  const { dataGridProps } = useDataGrid();

  const { data: instructorData, isLoading: instructorIsLoading } = useMany({
    resource: "instructors",
    ids: dataGridProps?.rows?.map((item: any) => item?.id) ?? [],
    queryOptions: {
      enabled: !!dataGridProps?.rows,
    },
  });

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "id",
        flex: 1,
        headerName: "ID",
        minWidth: 100,
        maxWidth: 100,
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
    [instructorData?.data]
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
