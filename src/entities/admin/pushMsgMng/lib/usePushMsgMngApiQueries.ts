import type { ApiAxiosResponse } from "@/shared/type";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { getPushMsgList } from "../api/pushMsgMngApi";
import type { PushMsgMngList, PushMsgMngListSearchData } from "../types";

export const pushMsgMngApiQueryKey = createQueryKeys("pushMsgMngApiQueryKey", {
  list: (params) => [params],
});

export const useGetPushMsgListQuery = <TData>(
  params: PushMsgMngListSearchData,
  options?: {
    enabled?: boolean;
    select: (res: ApiAxiosResponse<PushMsgMngList>) => TData;
  }
) => {
  return useQuery({
    queryKey: pushMsgMngApiQueryKey.list(params).queryKey,
    enabled: options?.enabled,
    select: options?.select,
    queryFn: () => getPushMsgList(params),
  });
};
