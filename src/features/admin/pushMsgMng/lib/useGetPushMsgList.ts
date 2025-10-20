import { useGetPushMsgListQuery } from "@/entities/admin/pushMsgMng/lib/usePushMsgMngApiQueries";
import type {
  PushMsgList,
  PushMsgListSearchParams,
} from "@/entities/admin/pushMsgMng/types";
import type { ApiAxiosResponse } from "@/shared/type";
import { useCallback } from "react";

export const useGetPushMsgList = (params: PushMsgListSearchParams) => {
  const select = useCallback(
    (res: ApiAxiosResponse<PushMsgList>) => {
      const data = res.data.data;
      if (!data) {
        return undefined;
      }

      if (params.serviceCd && params.seq) {
        const filtered = data.filter(
          (item) => item.serviceCd == params.serviceCd && item.seq == params.seq
        );
        return filtered;
      }

      if (params.serviceCd) {
        const filtered = data.filter(
          (item) => item.serviceCd == params.serviceCd
        );
        return filtered;
      }

      if (params.seq) {
        const filtered = data.filter((item) => item.seq == params.seq);
        return filtered;
      }

      return data;
    },
    [params]
  );

  const query = useGetPushMsgListQuery(params, {
    select,
  });

  return query;
};
