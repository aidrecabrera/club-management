import { Box, TextField } from "@mui/material";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export const MemberCreate = () => {
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    control,
    formState: { errors },
  } = useForm();

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
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
          label="Joindate"
          name="joindate"
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
