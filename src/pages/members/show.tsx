import { Stack, Typography } from "@mui/material";
import { useShow } from "@refinedev/core";
import {
  DateField,
  NumberField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export const MemberShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          Id
        </Typography>
        <NumberField value={record?.id ?? ""} />
        <Typography variant="body1" fontWeight="bold">
          Clubid
        </Typography>
        <NumberField value={record?.clubid ?? ""} />
        <Typography variant="body1" fontWeight="bold">
          Studentid
        </Typography>
        <NumberField value={record?.studentid ?? ""} />
        <Typography variant="body1" fontWeight="bold">
          Role
        </Typography>
        <TextField value={record?.role} />
        <Typography variant="body1" fontWeight="bold">
          Joindate
        </Typography>
        <DateField value={record?.joindate} />
        <Typography variant="body1" fontWeight="bold">
          Createdat
        </Typography>
        <DateField value={record?.createdat} />
        <Typography variant="body1" fontWeight="bold">
          Updatedat
        </Typography>
        <DateField value={record?.updatedat} />
      </Stack>
    </Show>
  );
};
