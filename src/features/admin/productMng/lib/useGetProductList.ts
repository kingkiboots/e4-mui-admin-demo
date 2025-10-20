import { useGetProductMngQuery } from "@/entities/admin/productMng/lib/useProductMngApiQueries";
import type {
  ProductMngList,
  ProductMngListSearchData,
} from "@/entities/admin/productMng/types";
import type { ApiAxiosResponse } from "@/shared/type";
import { useCallback } from "react";

export const useGetProductList = (params: ProductMngListSearchData) => {
  const select = useCallback(
    (res: ApiAxiosResponse<ProductMngList>) => {
      const data = res.data.data;
      if (!data) {
        return undefined;
      }

      if (params.serviceCd || params.seq) {
        const filtered = data.filter(
          (item) =>
            item.eventId == params.serviceCd && item.mediaId == params.seq
        );
        return filtered;
      }
      return data;
    },
    [params]
  );

  const query = useGetProductMngQuery(params, {
    select,
  });

  return query;
};
