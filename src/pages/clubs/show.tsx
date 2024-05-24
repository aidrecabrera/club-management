import { List } from "@/components/crud/list";
import { Show } from "@/components/crud/show";
import { convertDateFormat, convertTimeFormat } from "@/lib/utils";
import { TableType } from "@/types/types";
import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useList, useParsed, useShow } from "@refinedev/core";
import {
  CreateButton,
  DateField,
  DeleteButton,
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

  const { data: studentsData, isLoading: studentsLoading } = useList<
    TableType<"students">
  >({
    resource: "students",
    filters: [],
  });
  const students = studentsData?.data;

  const handleFilter = (value: string) => {
    const isNumeric = !isNaN(Number(value));
    setFilters([
      {
        field: isNumeric ? "studentid.studentid" : "students.id",
        value: isNumeric ? Number(value) : value,
        operator: isNumeric ? "eq" : "contains",
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
        field: "name",
        headerName: "Name",
        flex: 1,
        minWidth: 200,
        renderCell: function render({ row }) {
          const student = students?.find(
            (student) => student.id === row.studentid
          );
          return student ? `${student.firstname} ${student.lastname}` : "N/A";
        },
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
        minWidth: 200,
        renderCell: function render({ row }) {
          const student = students?.find(
            (student) => student.id === row.studentid
          );
          return student?.email || "N/A";
        },
      },
      {
        field: "phone",
        headerName: "Phone",
        flex: 1,
        renderCell: function render({ row }) {
          const student = students?.find(
            (student) => student.id === row.studentid
          );
          return student?.phone || "N/A";
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
              <ShowButton
                hideText
                resource="students"
                recordItemId={53}
                meta={{
                  student_id: 53,
                }}
              />
              <DeleteButton
                hideText
                resource="students"
                recordItemId={53}
                meta={{
                  student_id: 53,
                }}
              />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
      },
    ],
    [students]
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
      ) : (
        <CircularProgress />
      )}
    </>
  );
};
