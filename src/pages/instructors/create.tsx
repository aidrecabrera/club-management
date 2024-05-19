import { Autocomplete, Box, TextField } from "@mui/material";
import { Create, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export const InstructorCreate = () => {
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    control,
    formState: { errors },
  } = useForm();

  const { autocompleteProps: instructorAutocompleteProps } = useAutocomplete({
    resource: "instructors",
  });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <Controller
          control={control}
          name="instructor_id"
          rules={{ required: "This field is required" }}
          // eslint-disable-next-line
          defaultValue={null as any}
          render={({ field }) => (
            <Autocomplete
              {...instructorAutocompleteProps}
              {...field}
              onChange={(_, value) => {
                field.onChange(value?.id ?? value);
              }}
              getOptionLabel={(item) => {
                return (
                  instructorAutocompleteProps?.options?.find(
                    (p) => p?.id?.toString() === (item?.id ?? item)?.toString()
                  )?.title ?? ""
                );
              }}
              isOptionEqualToValue={(option, value) =>
                value === undefined ||
                option?.id?.toString() === (value?.id ?? value)?.toString()
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Instructor"
                  margin="normal"
                  variant="outlined"
                  error={!!(errors as any)?.instructor_id}
                  helperText={(errors as any)?.instructor_id?.message}
                  required
                />
              )}
            />
          )}
        />
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
          {...register("createdat", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.createdat}
          helperText={(errors as any)?.createdat?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Createdat"
          name="createdat"
        />

        <TextField
          {...register("updatedat", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.updatedat}
          helperText={(errors as any)?.updatedat?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Updatedat"
          name="updatedat"
        />
      </Box>
    </Create>
  );
};
