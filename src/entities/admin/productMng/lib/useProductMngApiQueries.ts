import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { type AxiosResponse } from "axios";
import { getProductMng } from "../api/productMngApi";

export const productMngApiQueryKey = createQueryKeys("productMngApiQueryKey", {
  get: () => ["get"],
});

export const useGetProductMngQuery = <TData>(options?: {
  select: (res: AxiosResponse) => TData;
}) => {
  return useQuery({
    queryKey: productMngApiQueryKey.get().queryKey,
    select: options?.select,
    queryFn: () => getProductMng(),
  });
};
