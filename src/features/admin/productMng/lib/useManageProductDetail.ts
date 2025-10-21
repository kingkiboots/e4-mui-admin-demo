import {
  useAddProductDetailMutation,
  useUpdateProductDetailMutation,
} from "@/entities/admin/productMng/lib/useProductMngApiQueries";
import type { ProductMngDetailData } from "@/entities/admin/productMng/types";
import type { Dispatch, SetStateAction } from "react";
import { useCallback } from "react";
import type { UseFormReset } from "react-hook-form";

export const useManageProductDetail = ({
  reset,
  setIsUpdatingDetail,
}: {
  reset: UseFormReset<ProductMngDetailData>;
  setIsUpdatingDetail: Dispatch<SetStateAction<boolean>>;
}) => {
  const { mutate: addProductDetail } = useAddProductDetailMutation();
  const { mutate: updateProductDetail } = useUpdateProductDetailMutation();

  const resetPushMsgDetailForm = useCallback(() => {
    reset();
    setIsUpdatingDetail(false);
  }, []);

  const handleAddProductDetail = useCallback(
    (data: ProductMngDetailData) => {
      addProductDetail(data, {
        onSuccess: (res) => {
          const data = res.data.data;
          if (data === true) {
            alert("정상적으로 저장되었습니다.");
            resetPushMsgDetailForm();
            return;
          }
          alert("오류 발생");
        },
      });
    },
    [addProductDetail, resetPushMsgDetailForm]
  );

  const handleUpdateProductDetail = useCallback(
    (data: ProductMngDetailData) => {
      updateProductDetail(data, {
        onSuccess: (res) => {
          const data = res.data.data;
          if (data === true) {
            alert("정상적으로 수정되었습니다.");
            resetPushMsgDetailForm();
            return;
          }
          alert("오류 발생");
        },
      });
    },
    [updateProductDetail, resetPushMsgDetailForm]
  );

  return {
    resetPushMsgDetailForm,
    handleAddProductDetail,
    handleUpdateProductDetail,
  };
};
