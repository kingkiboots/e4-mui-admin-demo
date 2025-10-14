import { apiClient } from "@/shared/api/netInstances";
import type { ApiAxiosResponse } from "@/shared/type";
import type { EventMngList } from "../types";

export const getEventMng = async (): Promise<ApiAxiosResponse<EventMngList>> => {
  return await apiClient.get(`/api/money/getEventMng`);
};
