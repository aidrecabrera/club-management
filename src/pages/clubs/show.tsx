import { List } from "@/components/crud/list";
import { Show } from "@/components/crud/show";
import { convertDateFormat, convertTimeFormat } from "@/lib/utils";
import { TableType } from "@/types/types";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams,
} from "@mui/x-data-grid";
import { BaseOption, useParsed, useSelect, useShow } from "@refinedev/core";
import {
  CreateButton,
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
  const { id } = useParsed();
  const record = data?.data as TableType<"clubs">;
  const { dataGridProps, setFilters } = useDataGrid({
    resource: "members",
    filters: {
      initial: [
        {
          field: "clubid",
          value: id,
          operator: "eq",
        },
      ],
    },
  });
  const {
    options,
    queryResult: { isLoading: membersLoading },
  } = useSelect<TableType<"students">>({
    resource: "students",
    hasPagination: false,
  });

  const handleFilter = (value: string) => {
    setFilters([
      {
        field: "studentid",
        value: value ? value : undefined,
        operator: "eq",
      },
    ]);
  };

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
        field: "students.id",
        headerName: "First Name",
        type: "singleSelect",
        headerAlign: "left",
        align: "left",
        minWidth: 250,
        flex: 0.5,
        valueOptions: options,
        valueFormatter: (params: GridValueFormatterParams<BaseOption>) => {
          return params.value;
        },
        renderCell: function render({ row }) {
          const student = options.find((item) => {
            return item.value.toString() === row.students.studentid.toString();
          });
          console.log(student);
          return "Test";
        },
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
                <CardHeader
                  action={<IconButton aria-label="settings"></IconButton>}
                  title={record.clubname}
                  subheader={`Founded: ${convertDateFormat(
                    (record.createdat as string) || new Date().toISOString()
                  )}`}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      marginTop: "-20px",
                    }}
                  >
                    {record.description}
                  </Typography>
                  <Divider
                    sx={{
                      margin: "10px 0",
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    Meeting: {record.meetingday} @{" "}
                    {convertTimeFormat(
                      (record.meetingtime as string) || "00:00"
                    )}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Room Number: {record.roomnumber}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={12} lg={9}>
              <List
                headerButtons={() => {
                  return (
                    <div className="flex flex-row items-center justify-center">
                      <FormControlLabel
                        label={""}
                        control={
                          <TextField
                            size="small"
                            margin="normal"
                            fullWidth
                            label="Search Members"
                            name="member"
                            sx={{
                              marginLeft: "25px",
                            }}
                            onChange={(e) => {
                              handleFilter(e.target.value);
                            }}
                          />
                        }
                      />
                      <CreateButton
                        resource="members"
                        meta={{
                          clubid: record.id,
                        }}
                      />
                    </div>
                  );
                }}
                canCreate={true}
                title={"Members"}
                breadcrumb={false}
                resource="members"
              >
                <DataGrid {...dataGridProps} columns={columns} autoHeight />
              </List>
            </Grid>
          </Grid>
        </Show>
      ) : null}
    </>
  );
};
