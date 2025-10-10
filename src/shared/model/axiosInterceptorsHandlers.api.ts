import type { AxiosRequestHeaders } from "axios";
import { getBrowserStorageController } from "../lib/browserStorageHelpers";
import type { ApiRequestConfig } from "../type";
import { isNullOrEmpty } from "../lib/commonHelpers";
import {
  STORAGE_KEY_AUTH_TOKEN,
  STORAGE_KEY_MEMBER_INFO,
} from "../const/browserStorageConst";
import {
  API_HEADER_AUTH_TOKEN,
  API_HEADER_AUTH_TOKEN_PREFIX,
} from "../const/apiConst";
import { requestDataRemoval } from "./sessionStorageShareHandlers";

// NOTE - 인터셉터는 공통으로 쓰이므로 shared이지만 비즈니스 로직이 안에 들어가니깐 어쩔 수 없이 fsd 계층구조 어김.

const browserStorage = getBrowserStorageController("session");
export const isLoadingBarEnabled = (config: ApiRequestConfig) =>
  config.showLoading ||
  (config.showLoading !== false && config.method !== "get");

//SECTION - 세션 관리: 리프레쉬토큰을 header.Authorization에 담음
export const setSessionManagementTokenOnHeader = (
  headers: AxiosRequestHeaders
) => {
  const authToken = browserStorage.getItem<string>(STORAGE_KEY_AUTH_TOKEN);
  if (isNullOrEmpty(authToken)) {
    return;
  }

  headers[
    API_HEADER_AUTH_TOKEN
  ] = `${API_HEADER_AUTH_TOKEN_PREFIX} ${authToken}`;
};

// STUB: 서버에서 쿠키가 내려오면 자동으로 브라우저 쿠키에도 세팅이 됨
// export const replaceSessionManagementToken = (
//   headers: AxiosResponse["headers"]
// ) => {
//   // getCookieFromHTTPHeader(headers, STORAGE_KEY_AUTH_TOKEN);
//   // const existingAuthToken = browserStorage.getItem<string>(
//   //   STORAGE_KEY_AUTH_TOKEN
//   // );
//   // const receivedAuthToken = headers.authorization?.replace("Bearer ", "");
//   // if (
//   //   isNullOrEmpty(receivedAuthToken) ||
//   //   existingAuthToken === receivedAuthToken
//   // ) {
//   //   return;
//   // }
//   // browserStorage.setItem(STORAGE_KEY_AUTH_TOKEN, receivedAuthToken);
// };

//NOTE - 401 되면 alert 띄우고 메인 페이지로 이동
//NOTE - 25.4.8: 였다가 alert 안띄우고 메인으로 이동
// let is401AlertShow: boolean = false;
export const handleSessionExpired = () => {
  browserStorage.removeItem(STORAGE_KEY_MEMBER_INFO);
  requestDataRemoval(STORAGE_KEY_MEMBER_INFO);
};

// export const redirectToLoginPage = () => {};
