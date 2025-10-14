import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { type AxiosResponse } from "axios";
import { getEventMng } from "../api/eventMngApi";

export const eventMngApiQueryKey = createQueryKeys("eventMngApiQueryKey", {
  get: () => ["get"],
});

export const useGetEventMngQuery = <TData>(options?: {
  select: (res: AxiosResponse) => TData;
}) => {
  return useQuery({
    queryKey: eventMngApiQueryKey.get().queryKey,
    select: options?.select,
    queryFn: () => getEventMng(),
  });
};
