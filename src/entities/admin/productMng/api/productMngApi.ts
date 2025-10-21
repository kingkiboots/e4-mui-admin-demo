import { apiClient } from "@/shared/api/netInstances";
import type { ApiAxiosResponse } from "@/shared/type";
import type {
  ProductMngDetailData,
  ProductMngList,
  ProductMngListSearchData,
} from "../types";
import { restApiConfig } from "@/shared/config";

export const getProductList = async (
  params: ProductMngListSearchData
): Promise<ApiAxiosResponse<ProductMngList>> => {
  return await apiClient.get(restApiConfig.api.productMng.list, { params });
};

/**
 * 푸쉬 메시지 정보 추가 요청
 * @param params
 * @returns 추가 결과
 */
export const addProductDetail = async (
  params: ProductMngDetailData
): Promise<ApiAxiosResponse<boolean>> => {
  return await apiClient.post(restApiConfig.api.productMng.add, params);
};

/**
 * 푸쉬 메시지 정보 추가 요청
 * @param params
 * @returns 추가 결과
 */
export const updateProductDetail = async (
  params: ProductMngDetailData
): Promise<ApiAxiosResponse<boolean>> => {
  return await apiClient.put(restApiConfig.api.productMng.update, params);
};
