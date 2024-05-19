import { Stack, Typography } from "@mui/material";
import { useShow } from "@refinedev/core";
import {
  DateField,
  EmailField,
  NumberField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export const InstructorShow = () => {
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
          Firstname
        </Typography>
        <TextField value={record?.firstname} />
        <Typography variant="body1" fontWeight="bold">
          Lastname
        </Typography>
        <TextField value={record?.lastname} />
        <Typography variant="body1" fontWeight="bold">
          Email
        </Typography>
        <EmailField value={record?.email} />
        <Typography variant="body1" fontWeight="bold">
          Phone
        </Typography>
        <TextField value={record?.phone} />
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
