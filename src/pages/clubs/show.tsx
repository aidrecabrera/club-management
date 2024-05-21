import { useShow } from "@refinedev/core";
import { Show } from "../../components/crud/show";
import { TableType } from "../../types/types";

export const ClubShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data as TableType<"clubs">;

  return (
    <>
      {!isLoading ? (
        <Show
          canDelete={false}
          title={record.clubname}
          isLoading={isLoading}
        ></Show>
      ) : null}
    </>
  );
};
