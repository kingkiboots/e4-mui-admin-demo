import type { AxiosRequestConfig, AxiosResponse } from "axios";

// export interface ApiErrorResponse {
//   data: {
//     token: string;
//     ttl: string;
//     type: string;
//   };
//   extendedMessage: string;
//   message: string;
// }

// export interface ApiError<T = ApiErrorResponse> extends AxiosError<T> {}

// export interface ApiResponse<T = ApiResponseData> extends AxiosResponse<T> {}
// export interface ApiResponseData<T = any> {
//   data: T;
//   message: string;
// }

declare module "axios" {
  export interface AxiosRequestConfig {
    // 필요한 다른 커스텀 옵션들도 여기에 추가
    showLoading?:
      | boolean
      | {
          show: boolean;
          timeout: number;
        };
  }
}

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  // bypass?: boolean;
  // previewUrl?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ApiRequestConfig<T = any> extends AxiosRequestConfig<T> {}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ApiResponse<T = any> {
  code: string;
  message: string;
  timestamp: string;
  data?: T;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ApiAxiosResponse<T = any>
  extends Omit<AxiosResponse<ApiResponse<T>>, "data"> {
  data: ApiResponse<T>;
}
