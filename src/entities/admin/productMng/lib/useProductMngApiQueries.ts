import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import type { ProductMngList, ProductMngListSearchData } from "../types";
import type { ApiAxiosResponse } from "@/shared/type";
import { getProductList } from "../api/productMngApi";

export const productMngApiQueryKey = createQueryKeys("productMngApiQueryKey", {
  list: (params) => [params],
});

export const useGetProductMngQuery = <TData>(
  params: ProductMngListSearchData,
  options?: {
    enabled?: boolean;
    select: (res: ApiAxiosResponse<ProductMngList>) => TData;
  }
) => {
  return useQuery({
    queryKey: productMngApiQueryKey.list(params).queryKey,
    enabled: options?.enabled,
    select: options?.select,
    queryFn: () => getProductList(params),
  });
};
