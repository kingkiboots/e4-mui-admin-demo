import type { ProductMngDetailData } from "@/entities/admin/productMng/types";
import { useManageProductDetail } from "@/features/admin/productMng/lib/useManageProductDetail";
import { checkIfDataIsNullOrEmpty } from "@/shared/lib/validationHelpers";
import { ButtonGroupRow } from "@/shared/ui/ButtonGroupRowUI";
import { Button } from "@/shared/ui/ButtonUI";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import type { Dispatch, SetStateAction } from "react";
import { useCallback } from "react";
import { memo } from "react";
import type { UseFormHandleSubmit, UseFormReset } from "react-hook-form";

type ProductMngButtonGroupWidgetProps = {
  setAlert: React.Dispatch<React.SetStateAction<boolean>>;
  isUpdatingDetail: boolean;
  setIsUpdatingDetail: Dispatch<SetStateAction<boolean>>;
  resetDetailForm: UseFormReset<ProductMngDetailData>;
  handleSubmitDetailForm: UseFormHandleSubmit<ProductMngDetailData>;
};

const ProductMngButtonGroupWidget = memo(
  ({
    setIsUpdatingDetail,
    resetDetailForm: reset,
    handleSubmitDetailForm: handleSubmit,
  }: ProductMngButtonGroupWidgetProps) => {
    const {
      resetPushMsgDetailForm,
      handleAddProductDetail,
      handleUpdateProductDetail,
    } = useManageProductDetail({
      reset,
      setIsUpdatingDetail,
    });

    const handleAddClick = useCallback(() => {
      handleSubmit((data) => {
        if (checkIfDataIsNullOrEmpty(data.brandId, data.giftId)) {
          alert("데이터를 입력하세요");
          return;
        }

        handleAddProductDetail(data);
      })();
    }, [handleSubmit, handleAddProductDetail]);

    const handleUpdateClick = useCallback(() => {
      handleSubmit((data) => {
        if (checkIfDataIsNullOrEmpty(data.brandId, data.giftId)) {
          alert("데이터를 입력하세요");
          return;
        }

        handleUpdateProductDetail(data);
      })();
    }, [handleSubmit, handleUpdateProductDetail]);

    return (
      <ButtonGroupRow>
        <Button
          size="small"
          color="success"
          variant="contained"
          onClick={resetPushMsgDetailForm}
        >
          <ClearOutlinedIcon fontSize="small" />
          &nbsp;상세정보 초기화
        </Button>
        <Button
          size="small"
          color="success"
          variant="contained"
          onClick={handleAddClick}
        >
          <AddOutlinedIcon fontSize="small" />
          &nbsp;상품전시 목록 생성
        </Button>
        {/* <Button size="small" color="success" variant="contained">
          <SearchOutlinedIcon fontSize="small" />
          &nbsp;상품전시 목록조회
        </Button> */}
        <Button
          onClick={handleUpdateClick}
          size="small"
          color="dark"
          variant="contained"
        >
          <SaveOutlinedIcon fontSize="small" />
          &nbsp;저장
        </Button>
      </ButtonGroupRow>
    );
  }
);

export default ProductMngButtonGroupWidget;
