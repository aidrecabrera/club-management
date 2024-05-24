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

type TClubInformation = TableType<"clubs"> & {
  instructors: Pick<
    TableType<"instructors">,
    "firstname" | "lastname" | "email" | "phone"
  >;
};

export const ClubShow = () => {
  const { queryResult } = useShow({
    meta: {
      select: "*, instructors(firstname, lastname, email, phone)",
    },
  });
  const { data, isLoading } = queryResult;
  const { id } = useParsed();
  const record = data?.data as TClubInformation;
  const { dataGridProps, setFilters } = useDataGrid({
    resource: "members",
    filters: {
      permanent: [
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
    filters: [
      {
        field: "id",
        operator: "in",
        value: dataGridProps.rows.map((row) => row.studentid),
      },
    ],
  });
  const students = studentsData?.data;

  const handleFilter = (value: string) => {
    setFilters([
      {
        field: "studentid",
        value: Number(value),
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
              <ShowButton hideText resource="members" recordItemId={row.id} />
              <DeleteButton hideText resource="members" recordItemId={row.id} />
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
                    Advisor:{" "}
                    {`${
                      record.instructors?.firstname ||
                      record.instructors?.lastname
                        ? `${record.instructors?.firstname || ""} ${
                            record.instructors?.lastname || ""
                          }`
                        : "N/A"
                    }`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email: {record.instructors?.email || "N/A"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Phone: {record.instructors?.phone || "N/A"}
                  </Typography>
                  <Divider
                    sx={{
                      margin: "10px 0",
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    Room Number: {record.roomnumber}
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
                            label="Search Member by ID"
                            name="member"
                            sx={{
                              marginLeft: "25px",
                            }}
                            onChange={(e) => {
                              if (e.target.value) {
                                handleFilter(e.target.value);
                              } else {
                                setFilters([]);
                              }
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
