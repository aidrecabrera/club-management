import { Box, TextField } from "@mui/material";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export const MemberEdit = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult },
    register,
    control,
    formState: { errors },
  } = useForm();

  const membersData = queryResult?.data?.data;

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
          {...register("clubid", {
            required: "This field is required",
            valueAsNumber: true,
          })}
          error={!!(errors as any)?.clubid}
          helperText={(errors as any)?.clubid?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="number"
          label="Clubid"
          name="clubid"
        />
        <TextField
          {...register("studentid", {
            required: "This field is required",
            valueAsNumber: true,
          })}
          error={!!(errors as any)?.studentid}
          helperText={(errors as any)?.studentid?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="number"
          label="Studentid"
          name="studentid"
        />
        <TextField
          {...register("role", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.role}
          helperText={(errors as any)?.role?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Role"
          name="role"
        />
        <TextField
          {...register("joindate", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.joindate}
          helperText={(errors as any)?.joindate?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Joined Date"
          name="joindate"
        />
      </Box>
    </Edit>
  );
};
