import { apiClient } from "@/shared/api/netInstances";
import type { ApiAxiosResponse } from "@/shared/type";
import type {
  PushMsgDeleteParams,
  PushMsgDetailData,
  PushMsgList,
  PushMsgListSearchParams,
} from "../types";
import { restApiConfig } from "@/shared/config";

/**
 * 푸쉬 메세지 목록 조회 요청
 * @param params
 * @returns 푸쉬 메세지 목록
 */
export const getPushMsgList = async (
  params: PushMsgListSearchParams
): Promise<ApiAxiosResponse<PushMsgList>> => {
  return await apiClient.get(restApiConfig.api.pushMsgMng.list, { params });
};

/**
 * 푸쉬 메시지 정보 추가 요청
 * @param params
 * @returns 추가 결과
 */
export const addPushMsgDetail = async (
  params: PushMsgDetailData
): Promise<ApiAxiosResponse<boolean>> => {
  return await apiClient.post(restApiConfig.api.pushMsgMng.add, params);
};

/**
 * 푸쉬 메시지 정보 수정 요청
 * @param params
 * @returns 수정 결과
 */
export const updatePushMsgDetail = async (
  params: PushMsgDetailData
): Promise<ApiAxiosResponse<boolean>> => {
  return await apiClient.put(restApiConfig.api.pushMsgMng.update, params);
};

/**
 * 푸쉬 메시지 정보 삭제 요청
 * @param params
 * @returns 삭제 결과
 */
export const deletePushMsg = async (
  params: PushMsgDeleteParams
): Promise<ApiAxiosResponse<boolean>> => {
  return await apiClient.delete(restApiConfig.api.pushMsgMng.delete, {
    params,
  });
};
