import type { AxiosResponse } from "axios";
import { apiClient } from "@/shared/api/netInstances";

export const getEventMng = async (): Promise<AxiosResponse> => {
  return await apiClient.get(`/api/money/getEventMng`);
};
