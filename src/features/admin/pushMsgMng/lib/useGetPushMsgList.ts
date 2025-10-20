import { useGetPushMsgListQuery } from "@/entities/admin/pushMsgMng/lib/usePushMsgMngApiQueries";
import type {
  PushMsgList,
  PushMsgListSearchParams,
} from "@/entities/admin/pushMsgMng/types";
import type { ApiAxiosResponse } from "@/shared/type";
import { useCallback } from "react";

export const useGetPushMsgList = (params: PushMsgListSearchParams) => {
  const select = useCallback((res: ApiAxiosResponse<PushMsgList>) => {
    const data = res.data.data;
    if (!data) {
      return undefined;
    }

    return data;
  }, []);

  const query = useGetPushMsgListQuery(params, {
    select,
  });

  return query;
};
