import { Stack, Typography } from "@mui/material";
import { useShow } from "@refinedev/core";
import {
  DateField,
  NumberField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export const MemberShow = () => {
  const { queryResult } = useShow({
    meta: {
      select: "*, studentid(*)",
    },
  });
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          Club ID
        </Typography>
        <NumberField value={record?.clubid ?? ""} />
        <Typography variant="body1" fontWeight="bold">
          Student ID
        </Typography>
        <NumberField value={record?.studentid.id ?? ""} />
        <Typography variant="body1" fontWeight="bold">
          Firstname
        </Typography>
        <TextField value={record?.studentid?.firstname} />
        <Typography variant="body1" fontWeight="bold">
          Lastname
        </Typography>
        <TextField value={record?.studentid?.lastname} />
        <Typography variant="body1" fontWeight="bold">
          Role
        </Typography>
        <TextField value={record?.role} />
        <Typography variant="body1" fontWeight="bold">
          Registered at
        </Typography>
        <DateField value={record?.joindate} />
      </Stack>
    </Show>
  );
};
