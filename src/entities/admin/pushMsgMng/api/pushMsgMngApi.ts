import { apiClient } from "@/shared/api/netInstances";
import type { ApiAxiosResponse } from "@/shared/type";
import type { PushMsgMngList } from "../types";

export const getPushMsgMng = async (): Promise<ApiAxiosResponse<PushMsgMngList>> => {
  return await apiClient.get(`/api/money/getPushMsgMng`);
};
