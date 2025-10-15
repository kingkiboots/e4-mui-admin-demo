import type { ApiAxiosResponse } from "@/shared/type";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { getEventMngList } from "../api/eventMngApi";
import type { EventMngList, EventMngListSearchData } from "../types";


export const eventMngApiQueryKey = createQueryKeys("eventMngApiQueryKey", {
  list: (params) => [params],
});

export const useGetEventListQuery = <TData>(
  params: EventMngListSearchData,
  options?: {
    enabled?: boolean;
    select: (res: ApiAxiosResponse<EventMngList>) => TData;
  }
) => {
  return useQuery({
    queryKey: eventMngApiQueryKey.list(params).queryKey,
    enabled: options?.enabled,
    select: options?.select,
    queryFn: () => getEventMngList(params),
  });
};