import type { ProductMngDetailData } from "@/entities/admin/productMng/types";
import { SELECT_OPTION_YN, USE_YN_Y } from "@/shared/const";
import { Detail } from "@/shared/ui/DetailUI";
import { Select } from "@/shared/ui/SelectUI";
import { TextField } from "@/shared/ui/TextFieldUI";
import { memo } from "react";
import { type Control } from "react-hook-form";

interface ProductMngDetailCompWidgetProps {
  isUpdatingDetail: boolean;
  detailFormControl: Control<ProductMngDetailData>;
}

const ProductMngDetailCompWidget = memo<ProductMngDetailCompWidgetProps>(
  ({ detailFormControl: control }) => {
    return (
      <Detail
        title="매체 정보"
        information="상품 전시 목록 생성 전 매체식별자가 해당 이벤트에 적합한지 반드시 확인해주세요"
      >
        <TextField
          label="매체명"
          placeholder="매체명을 입력하세요"
          name="brandName"
          control={control}
          totalColSpan={{ xs: 12, sm: 3 }}
          labelColSpan={{ xs: 12, lg: 4 }}
          inputColSpan={{ xs: 12, lg: 8 }}
        />
        <TextField
          label="상품제공자코드"
          placeholder="상품제공자 코드를 입력하세요"
          name="giftSubTypeCd"
          control={control}
          totalColSpan={{ xs: 12, sm: 3 }}
          labelColSpan={{ xs: 12, lg: 4 }}
          inputColSpan={{ xs: 12, lg: 8 }}
        />
        <TextField
          label="업무모델코드"
          placeholder="업무모델 코드를 입력하세요"
          name="eventId"
          control={control}
          totalColSpan={{ xs: 12, sm: 3 }}
          labelColSpan={{ xs: 12, lg: 4 }}
          inputColSpan={{ xs: 12, lg: 8 }}
        />
        <Select
          control={control}
          name="useYn"
          label="삭제여부"
          options={SELECT_OPTION_YN}
          defaultValue={USE_YN_Y}
          totalColSpan={{ xs: 12, sm: 3 }}
          labelColSpan={{ xs: 12, lg: 4 }}
          inputColSpan={{ xs: 12, lg: 8 }}
        />
      </Detail>
    );
  }
);

export default ProductMngDetailCompWidget;
