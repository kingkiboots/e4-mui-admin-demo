import { AxiosError, AxiosHeaders } from "axios";
import { type AxiosRequestConfig } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MockArrayResponse = [status: number, data?: any, headers?: AxiosHeaders];

type MockObjectResponse = {
  status: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  headers?: AxiosHeaders;
  config?: AxiosRequestConfig;
};

type MockResponse = MockArrayResponse | MockObjectResponse;

type CallbackResponseSpecFunc = (
  config: AxiosRequestConfig
) => MockResponse | Promise<MockResponse>;

export const withDelay =
  (
    // 기본 500ms
    delay: number = 500,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    response: { status: number; data: any }
  ): CallbackResponseSpecFunc =>
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  (_config: AxiosRequestConfig) => {
    //NOTE - reject는 deprecated 되었음. 에러를 응답하려면 4-500 응답코드로 응답할 것
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve([response.status, response.data]);
      }, delay);
    });
  };

export class CustomAxiosError extends Error {
  constructor(message: string) {
    super(message); // (1)
    this.name = "CustomAxiosError"; // (2)
  }
}

export const createAxiosError = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: any,
  status: number,
  message: string
): AxiosError => {
  const error = new AxiosError(message);
  error.config = config;
  error.response = {
    data: { message },
    status,
    statusText: message,
    headers: {},
    config,
  };
  // error.isAxiosError = true;
  return error;
};
