import { apiClient } from "@/shared/api/netInstances";
import type { ApiAxiosResponse } from "@/shared/type";
import type { EventMngList } from "../types";
import { restApiConfig } from "@/shared/config";

export const getEventMng = async (): Promise<
  ApiAxiosResponse<EventMngList>
> => {
  return await apiClient.get(restApiConfig.api.eventMng.list);
};
