import { useGetEventListQuery } from "@/entities/admin/eventMng/lib/useEventMngApiQueries";
import type {
  EventMngList,
  EventMngListSearchData,
} from "@/entities/admin/eventMng/types";
import type { ApiAxiosResponse } from "@/shared/type";
import { useCallback } from "react";

export const useGetEventList = (params: EventMngListSearchData) => {
  const select = useCallback(
    (res: ApiAxiosResponse<EventMngList>) => {
      const data = res.data.data;
      if (!data) {
        return undefined;
      }

      if (params.eventType == "전체") {
        params.eventType = "";
      }

      if (params.eventType) {
        const filtered = data.filter((item) => item.id == params.eventType);
        return filtered;
      }

      return data;
    },
    [params]
  );

  const query = useGetEventListQuery(params, {
    select,
  });

  return query;
};
