import type { AxiosResponse } from "axios";
import { apiClient } from "@/shared/api/netInstances";

export const getLimitMng = async (): Promise<AxiosResponse> => {
  return await apiClient.get(`/api/money/getLimitMng`);
};
