import { Box, TextField } from "@mui/material";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export const InstructorEdit = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult },
    register,
    control,
    formState: { errors },
  } = useForm();

  const instructorsData = queryResult?.data?.data;

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("id", {
            required: "This field is required",
            valueAsNumber: true,
          })}
          error={!!(errors as any)?.id}
          helperText={(errors as any)?.id?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="number"
          label="Id"
          name="id"
          disabled
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
    </Edit>
  );
};
