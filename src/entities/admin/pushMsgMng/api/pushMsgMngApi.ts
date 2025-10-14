import { apiClient } from "@/shared/api/netInstances";
import type { ApiAxiosResponse } from "@/shared/type";
import type { PushMsgMngList } from "../types";
import { restApiConfig } from "@/shared/config";

export const getPushMsgMng = async (): Promise<
  ApiAxiosResponse<PushMsgMngList>
> => {
  return await apiClient.get(restApiConfig.api.pushMsgMng.list);
};
