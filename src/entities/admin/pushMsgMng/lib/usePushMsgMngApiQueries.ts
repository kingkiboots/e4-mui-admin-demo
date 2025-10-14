import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { type AxiosResponse } from "axios";
import { getPushMsgMng } from "../api/pushMsgMngApi";

export const pushMsgMngApiQueryKey = createQueryKeys("pushMsgMngApiQueryKey", {
  get: () => ["get"],
});

export const useGetPushMsgMngQuery = <TData>(options?: {
  select: (res: AxiosResponse) => TData;
}) => {
  return useQuery({
    queryKey: pushMsgMngApiQueryKey.get().queryKey,
    select: options?.select,
    queryFn: () => getPushMsgMng(),
  });
};
