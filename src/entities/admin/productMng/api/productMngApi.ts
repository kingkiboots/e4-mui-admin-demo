import { apiClient } from "@/shared/api/netInstances";
import type { ApiAxiosResponse } from "@/shared/type";
import type { ProductMngList, ProductMngListSearchData } from "../types";
import { restApiConfig } from "@/shared/config";

export const getProductList = async (
  params: ProductMngListSearchData
): Promise<ApiAxiosResponse<ProductMngList>> => {
  return await apiClient.get(restApiConfig.api.productMng.list, { params });
};
