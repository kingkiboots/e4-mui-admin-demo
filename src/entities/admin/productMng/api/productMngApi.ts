import { apiClient } from "@/shared/api/netInstances";
import type { ApiAxiosResponse } from "@/shared/type";
import type { ProductMngList } from "../types";
import { restApiConfig } from "@/shared/config";

export const getProductMng = async (): Promise<
  ApiAxiosResponse<ProductMngList>
> => {
  return await apiClient.get(restApiConfig.api.productMng.list);
};
