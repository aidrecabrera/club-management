import { Box, TextField } from "@mui/material";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { useParams } from "react-router-dom";

export const MemberCreate = () => {
  const { clubid } = useParams();
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      clubid: clubid && clubid !== "new" ? parseInt(clubid) : undefined,
      studentid: undefined,
      role: "",
    },
  });
  console.log(useParams());
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
          label="Club ID"
          name="clubid"
          disabled={!(clubid === "new")}
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
          label="Student ID"
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
      </Box>
    </Create>
  );
};
