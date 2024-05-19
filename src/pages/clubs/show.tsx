import { Stack, Typography } from "@mui/material";
import { useShow } from "@refinedev/core";
import {
  DateField,
  NumberField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export const ClubShow = () => {
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
          Clubname
        </Typography>
        <TextField value={record?.clubname} />
        <Typography variant="body1" fontWeight="bold">
          Description
        </Typography>
        <TextField value={record?.description} />
        <Typography variant="body1" fontWeight="bold">
          Advisorid
        </Typography>
        <NumberField value={record?.advisorid ?? ""} />
        <Typography variant="body1" fontWeight="bold">
          Meetingday
        </Typography>
        <TextField value={record?.meetingday} />
        <Typography variant="body1" fontWeight="bold">
          Meetingtime
        </Typography>
        <TextField value={record?.meetingtime} />
        <Typography variant="body1" fontWeight="bold">
          Roomnumber
        </Typography>
        <NumberField value={record?.roomnumber ?? ""} />
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
