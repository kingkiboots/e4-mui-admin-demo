import { useGetProductMngQuery } from "@/entities/admin/productMng/lib/useProductMngApiQueries";
import type { ProductMngList } from "@/entities/admin/productMng/types";
import type { ApiAxiosResponse } from "@/shared/type";
import { useCallback } from "react";

export const useGetProductList = () => {
  const select = useCallback((res: ApiAxiosResponse<ProductMngList>) => {
    const data = res.data.data;
    if (!data) {
      return undefined;
    }

    return data;
  }, []);

  const params = {
    seq: "",
    serviceCd: "",
  };
  const query = useGetProductMngQuery(params, {
    select,
  });

  return query;
};
