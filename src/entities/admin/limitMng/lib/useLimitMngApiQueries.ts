import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { type AxiosResponse } from "axios";
import { getLimitMng } from "../api/limtMngApi";

export const limitMngApiQueryKey = createQueryKeys("limitMngApiQueryKey", {
  get: () => ["get"],
});

export const useGetLimitMngQuery = <TData>(options?: {
  select: (res: AxiosResponse) => TData;
}) => {
  return useQuery({
    queryKey: limitMngApiQueryKey.get().queryKey,
    select: options?.select,
    queryFn: () => getLimitMng(),
  });
};
