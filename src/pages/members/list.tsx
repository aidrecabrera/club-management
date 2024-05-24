import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  CreateButton,
  DateField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React from "react";

export const MemberList = () => {
  const { dataGridProps } = useDataGrid({
    resource: "members",
    meta: {
      select: "id, clubid, studentid, role, joindate, studentid(*)",
    },
  });

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "id",
        headerName: "ID",
        type: "number",
        minWidth: 100,
        maxWidth: 150,
      },
      {
        field: "clubid",
        flex: 1,
        headerName: "Club ID",
        type: "number",
        minWidth: 100,
        maxWidth: 150,
      },
      {
        field: "studentid",
        flex: 1,
        headerName: "Student ID",
        type: "number",
        minWidth: 100,
        maxWidth: 150,
        renderCell: function render({ value }) {
          return value?.id;
        },
      },
      {
        field: "name",
        flex: 1,
        headerName: "Student Name",
        minWidth: 200,
        renderCell: function render({ row }) {
          return `${row.studentid?.firstname} ${row.studentid?.lastname}`;
        },
      },
      {
        field: "role",
        flex: 1,
        headerName: "Role",
        minWidth: 100,
      },
      {
        field: "joindate",
        flex: 1,
        headerName: "Join Date",
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
    <List
      headerButtons={() => {
        return (
          <>
            <CreateButton
              meta={{
                clubid: "new",
              }}
            />
          </>
        );
      }}
    >
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};
