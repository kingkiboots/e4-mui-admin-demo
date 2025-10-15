import { useGetEventListQuery } from "@/entities/admin/eventMng/lib/useEventMngApiQueries";
import type { EventMngList } from "@/entities/admin/eventMng/types";
import type { ApiAxiosResponse } from "@/shared/type";
import { useCallback } from "react";

export const useGetEventList = () => {
  const select = useCallback((res: ApiAxiosResponse<EventMngList>) => {
    const data = res.data.data;
    if (!data) {
      return undefined;
    }

    return data;
  }, []);

  const params = {
    id: "",
    code: "",
  };
  const query = useGetEventListQuery(params, {
    select,
  });

  return query;
};
