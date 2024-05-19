import { Box, TextField } from "@mui/material";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export const ClubCreate = () => {
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
            required: "This field is required",
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
        <TextField
          {...register("meetingday", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.meetingday}
          helperText={(errors as any)?.meetingday?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Meetingday"
          name="meetingday"
        />
        <TextField
          {...register("meetingtime", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.meetingtime}
          helperText={(errors as any)?.meetingtime?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Meetingtime"
          name="meetingtime"
        />
        <TextField
          {...register("roomnumber", {
            required: "This field is required",
            valueAsNumber: true,
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