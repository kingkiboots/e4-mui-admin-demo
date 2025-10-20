import type { ApiAxiosResponse } from "@/shared/type";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addPushMsgDetail,
  deletePushMsg,
  getPushMsgList,
  updatePushMsgDetail,
} from "../api/pushMsgMngApi";
import type { PushMsgList, PushMsgListSearchParams } from "../types";

export const pushMsgMngApiQueryKey = createQueryKeys("pushMsgMngApiQueryKey", {
  list: (params) => [params],
});

export const useGetPushMsgListQuery = <TData>(
  params: PushMsgListSearchParams,
  options?: {
    enabled?: boolean;
    select: (res: ApiAxiosResponse<PushMsgList>) => TData;
  }
) => {
  return useQuery({
    queryKey: pushMsgMngApiQueryKey.list(params).queryKey,
    enabled: options?.enabled,
    select: options?.select,
    queryFn: () => getPushMsgList(params),
  });
};

export const useAddPushMsgDetailMutation = () => {
  return useMutation({
    mutationFn: addPushMsgDetail,
  });
};

export const useUpdatePushMsgDetailMutation = () => {
  return useMutation({
    mutationFn: updatePushMsgDetail,
  });
};

export const useDeletePushMsgMutation = () => {
  return useMutation({
    mutationFn: deletePushMsg,
  });
};
