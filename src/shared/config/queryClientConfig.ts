import {
  QueryClient,
  QueryCache,
  type DefaultError,
  type Query,
} from "@tanstack/query-core";
import { getTimeMilliseconds } from "../lib/commonHelpers";

const handleError = async (
  error: DefaultError,
  query: Query<unknown, unknown, unknown>
) => {
  console.error(`error: ${error} >>>>>>>>> query :`, query);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: getTimeMilliseconds(3, "min"),
      gcTime: getTimeMilliseconds(5, "min"),
      throwOnError: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      retry: (failureCount, error: any) => {
        // 404 에러인 경우 재시도하지 않음
        const errorStatus = String(error?.response?.status);
        const is4XXError = errorStatus.startsWith("4");
        if (is4XXError) {
          return false;
        }

        // 그 외의 경우 기본 재시도 로직 적용
        return failureCount < 3;
      },

      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },

    mutations: {
      retry: 2,
    },
  },
  queryCache: new QueryCache({
    onError: handleError,
  }),
});

export default queryClient;
