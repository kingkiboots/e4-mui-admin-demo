import type { AxiosRequestHeaders, AxiosResponseHeaders } from "axios";

export const API_SUCCESS_CODE = "0000" as const;

export const API_HEADER_AUTH_TOKEN = "Authorization" as
  | keyof AxiosRequestHeaders
  | keyof AxiosResponseHeaders;
export const API_HEADER_AUTH_TOKEN_PREFIX = "Bearer" as const;
