import { apiClient } from "@/shared/api/netInstances";
import type { ApiAxiosResponse } from "@/shared/type";
import type { PushMsgMngList, PushMsgMngListSearchData } from "../types";
import { restApiConfig } from "@/shared/config";

export const getPushMsgList = async (
  params: PushMsgMngListSearchData
): Promise<ApiAxiosResponse<PushMsgMngList>> => {
  return await apiClient.get(restApiConfig.api.pushMsgMng.list, { params });
};
