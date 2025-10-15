import { useGetPushMsgListQuery } from "@/entities/admin/pushMsgMng/lib/usePushMsgMngApiQueries";
import type { PushMsgMngList } from "@/entities/admin/pushMsgMng/types";
import type { ApiAxiosResponse } from "@/shared/type";
import { useCallback } from "react";

export const useGetPushMsgList = () => {
  const select = useCallback((res: ApiAxiosResponse<PushMsgMngList>) => {
    const data = res.data.data;
    if (!data) {
      return undefined;
    }

    return data;
  }, []);

  const params = {
    seq: "",
    serviceCd: "",
  };
  const query = useGetPushMsgListQuery(params, {
    select,
  });

  return query;
};
