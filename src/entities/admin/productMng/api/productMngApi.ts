import { apiClient } from "@/shared/api/netInstances";
import type { ApiAxiosResponse } from "@/shared/type";
import type { ProductMngList } from "../types";

export const getProductMng = async (): Promise<ApiAxiosResponse<ProductMngList>> => {
  return await apiClient.get(`/api/money/getProductMng`);
};
