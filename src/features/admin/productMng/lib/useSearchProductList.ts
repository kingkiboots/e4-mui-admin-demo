import { useForm, type SubmitHandler } from "react-hook-form";
import { useCallback } from "react";
import type { Dispatch } from "react";
import type { SetStateAction } from "react";
import { defaultProductListSearchParams } from "../model/getProductListHandler";
import type { ProductMngListSearchData } from "@/entities/admin/productMng/types";

export const useSearchProductList = ({
  setProductListSearchParams,
}: {
  setProductListSearchParams: Dispatch<
    SetStateAction<ProductMngListSearchData>
  >;
}) => {
  const {
    control,
    reset,
    handleSubmit,
    // formState: { errors },
  } = useForm<ProductMngListSearchData>({
    defaultValues: defaultProductListSearchParams,
  });

  const handleSearchClick = useCallback(() => {
    const handleValid: SubmitHandler<ProductMngListSearchData> = (data) => {
      setProductListSearchParams(data);
    };
    handleSubmit(handleValid)();
  }, [handleSubmit, setProductListSearchParams]);

  return { control, reset, handleSearchClick };
};
