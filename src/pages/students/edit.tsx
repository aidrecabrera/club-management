import { Box, TextField } from "@mui/material";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export const StudentEdit = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult },
    register,
    control,
    formState: { errors },
  } = useForm();

  const studentsData = queryResult?.data?.data;

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("student_id", {
            required: "This field is required",
            valueAsNumber: true,
          })}
          error={!!(errors as any)?.student_id}
          helperText={(errors as any)?.student_id?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="number"
          label="Student_id"
          name="student_id"
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
          {...register("dateofbirth", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.dateofbirth}
          helperText={(errors as any)?.dateofbirth?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Dateofbirth"
          name="dateofbirth"
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
