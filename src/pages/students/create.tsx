import { Box, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const StudentCreate = () => {
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("firstname", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.firstname}
          helperText={(errors as any)?.firstname?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Firstname"
          name="firstname"
        />
        <TextField
          {...register("lastname", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.lastname}
          helperText={(errors as any)?.lastname?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Lastname"
          name="lastname"
        />
        <Controller
          name="dateofbirth"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                value={value}
                onChange={(date) => {
                  onChange(date);
                  setValue("dateofbirth", date);
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
          {...register("gender", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.gender}
          helperText={(errors as any)?.gender?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Gender"
          name="gender"
        />
        <TextField
          {...register("email", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.email}
          helperText={(errors as any)?.email?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="email"
          label="Email"
          name="email"
        />
        <TextField
          {...register("phone", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.phone}
          helperText={(errors as any)?.phone?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Phone"
          name="phone"
        />
        <TextField
          {...register("address", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.address}
          helperText={(errors as any)?.address?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Address"
          name="address"
        />
      </Box>
    </Create>
  );
};
