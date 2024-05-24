import { Stack, Typography } from "@mui/material";
import { useShow } from "@refinedev/core";
import {
  DateField,
  EmailField,
  NumberField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export const StudentShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          Student ID
        </Typography>
        <NumberField value={record?.id ?? ""} />
        <Typography variant="body1" fontWeight="bold">
          Firstname
        </Typography>
        <TextField value={record?.firstname} />
        <Typography variant="body1" fontWeight="bold">
          Lastname
        </Typography>
        <TextField value={record?.lastname} />
        <Typography variant="body1" fontWeight="bold">
          Dateofbirth
        </Typography>
        <DateField value={record?.dateofbirth} />
        <Typography variant="body1" fontWeight="bold">
          Gender
        </Typography>
        <TextField value={record?.gender} />
        <Typography variant="body1" fontWeight="bold">
          Email
        </Typography>
        <EmailField value={record?.email} />
        <Typography variant="body1" fontWeight="bold">
          Phone
        </Typography>
        <TextField value={record?.phone} />
        <Typography variant="body1" fontWeight="bold">
          Address
        </Typography>
        <TextField value={record?.address} />
        <Typography variant="body1" fontWeight="bold">
          Registered at
        </Typography>
        <DateField value={record?.createdat} />
        <Typography variant="body1" fontWeight="bold">
          Updated at
        </Typography>
        <DateField value={record?.updatedat} />
      </Stack>
    </Show>
  );
};
