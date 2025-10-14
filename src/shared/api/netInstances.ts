import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { APP_CONFIG } from "../config";
import {
  apiErrorHandler,
  apiRequestHandler,
  apiResponseHandler,
} from "./interceptors.api";

/* api 호출 instance */
const apiClient = axios.create({
  // baseURL: "http://localhost:8080/",
  // baseURL: "http://10.135.111.186:8080",
  baseURL: APP_CONFIG.API.ENDPOINT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
  responseType: "json",
});

/* api interceptor 적용 */
apiClient.interceptors.request.use(apiRequestHandler);
apiClient.interceptors.response.use(apiResponseHandler, apiErrorHandler);

/* api mocker */
const apiClientMocker = new MockAdapter(apiClient, {
  onNoMatch: "passthrough",
});

export { apiClient, apiClientMocker };
