import { Box, MenuItem, Select, TextField } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import dayjs from "dayjs";
import { useEffect } from "react";
import { Controller } from "react-hook-form";

export const ClubCreate = () => {
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      clubname: "",
      description: "",
      advisorid: "",
      meetingday: "",
      meetingtime: null,
      roomnumber: "",
    },
  });

  useEffect(() => {
    console.log(getValues());
  }, [getValues()]);

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("clubname", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.clubname}
          helperText={(errors as any)?.clubname?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Clubname"
          name="clubname"
        />
        <TextField
          {...register("description", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.description}
          helperText={(errors as any)?.description?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Description"
          name="description"
        />
        <TextField
          {...register("advisorid", {
            valueAsNumber: true,
          })}
          error={!!(errors as any)?.advisorid}
          helperText={(errors as any)?.advisorid?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="number"
          label="Advisorid"
          name="advisorid"
        />
        <Controller
          name="meetingday"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Select
              value={value || ""}
              onChange={(e) => {
                const day = e.target.value;
                onChange(day);
                setValue("meetingday", day as any);
              }}
              error={!!error}
              label="Meeting Day"
              name="meetingday"
              fullWidth
            >
              <MenuItem value="Monday">Monday</MenuItem>
              <MenuItem value="Tuesday">Tuesday</MenuItem>
              <MenuItem value="Wednesday">Wednesday</MenuItem>
              <MenuItem value="Thursday">Thursday</MenuItem>
              <MenuItem value="Friday">Friday</MenuItem>
              <MenuItem value="Saturday">Saturday</MenuItem>
              <MenuItem value="Sunday">Sunday</MenuItem>
            </Select>
          )}
        />
        <Controller
          name="meetingtime"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Meeting Time"
                value={value ? dayjs(value, "HH:mm:ss") : null}
                onChange={(time) => {
                  if (time) {
                    const formattedTime = time.format("HH:mm:ss");
                    onChange(formattedTime);
                    setValue("meetingtime", formattedTime as any);
                  } else {
                    onChange(null);
                    setValue("meetingtime", null);
                  }
                }}
                onError={(error) => {
                  if (error) {
                    console.error(error);
                  }
                }}
              />
            </LocalizationProvider>
          )}
        />
        <TextField
          {...register("roomnumber", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.roomnumber}
          helperText={(errors as any)?.roomnumber?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="number"
          label="Roomnumber"
          name="roomnumber"
        />
      </Box>
    </Create>
  );
};
