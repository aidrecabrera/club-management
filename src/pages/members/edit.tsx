import { Box, TextField, Typography } from "@mui/material";
import { useOne } from "@refinedev/core";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { RefinePageHeaderClassNames } from "@refinedev/ui-types";

export const MemberEdit = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult },
    register,
    control,
    formState: { errors },
  } = useForm();

  const membersData = queryResult?.data?.data;

  const { data } = useOne({
    resource: "members",
    id: membersData?.id,
    meta: {
      select: "clubid(clubname), studentid(firstname, lastname)",
    },
  });

  console.log(data);

  return (
    <Edit
      title={
        <Typography variant="h5" className={RefinePageHeaderClassNames.Title}>
          Edit {data?.data?.studentid?.firstname}{" "}
          {data?.data?.studentid?.lastname}'s Role in{" "}
          {data?.data?.clubid?.clubname} Club
        </Typography>
      }
      saveButtonProps={saveButtonProps}
    >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
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
    </Edit>
  );
};
