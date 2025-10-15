import { apiClient } from "@/shared/api/netInstances";
import type { ApiAxiosResponse } from "@/shared/type";
import type { EventMngList , EventMngListSearchData} from "../types";
import { restApiConfig } from "@/shared/config";

export const getEventMngList = async (
  params: EventMngListSearchData
): Promise<ApiAxiosResponse<EventMngList>> => {
  return await apiClient.get(restApiConfig.api.eventMng.list, { params });
};
