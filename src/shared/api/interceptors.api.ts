import {
  AxiosError,
  type AxiosRequestHeaders,
  type AxiosResponse,
} from "axios";
import { decode } from "html-entities";
import { isNullOrBlank } from "../lib/commonHelpers";
import {
  isLoadingBarEnabled,
  handleSessionExpired,
  setSessionManagementTokenOnHeader,
} from "../model/axiosInterceptorsHandler.api";
import { HTTP_RESPONSE_STATUS_UNAUTHORIZED } from "../const";
import { getLoadingState } from "../store/LoadingStateStore";
import type { ApiRequestConfig } from "../type";

let loadingTimeoutId: NodeJS.Timeout;

export const apiRequestHandler = (config: ApiRequestConfig) => {
  const headers = (config.headers ?? {}) as AxiosRequestHeaders; // TODO: jwt 베어러 추가
  // NOTE- config.showLoading가 false 면 로딩바 안 띄움
  if (isLoadingBarEnabled(config)) {
    if (typeof config.showLoading === "object") {
      //NOTE - 단순히 타임 아웃 뒤에 뜨는 거야.
      loadingTimeoutId = setTimeout(() => {
        getLoadingState().actions.showLoading();
      }, config.showLoading.timeout);
      // TODO - 3초 안에 응답이 오면 이 setTimeOut를 꺼야해요 => 으로 구현해둠
    } else {
      getLoadingState().actions.showLoading();
    }
  }

  setSessionManagementTokenOnHeader(headers);

  return { ...config, headers };
};

export const apiErrorHandler = (err: AxiosError) => {
  console.error("[apiErrorHandler handler]:", err);

  if (err.response?.status === HTTP_RESPONSE_STATUS_UNAUTHORIZED) {
    handleSessionExpired();
    //STUB - 401 되면 alert 띄우고 메인 페이지로 이동
    // redirectToLoginPage();
  }

  if (loadingTimeoutId) {
    clearTimeout(loadingTimeoutId);
  }

  getLoadingState().actions.hideCountinuousLoading();

  return Promise.reject(err);
};

export const apiResponseHandler = (res: AxiosResponse) => {
  if (loadingTimeoutId) {
    clearTimeout(loadingTimeoutId);
  }

  if (isLoadingBarEnabled(res.config)) {
    getLoadingState().actions.hideLoading();
  }

  const { data } = res;

  if (data && data.message && !isNullOrBlank(data.message)) {
    data.message = decode(data.message, { level: "html5", scope: "strict" });
  }

  return res;
};
