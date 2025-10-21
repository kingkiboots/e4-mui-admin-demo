import type { ProductMngDetailData } from "@/entities/admin/productMng/types";
import { Detail } from "@/shared/ui/DetailUI";
import { Select } from "@/shared/ui/SelectUI";
import { memo } from "react";
import { type Control } from "react-hook-form";

interface ProductMngDetailTypeWidgetProps {
  isUpdatingDetail: boolean;
  detailFormControl: Control<ProductMngDetailData>;
}

const ProductMngDetailTypeWidget = memo<ProductMngDetailTypeWidgetProps>(
  ({ detailFormControl: control }) => {
    return (
      <Detail
        key={"product-mng-detail-info"}
        title="분류 정보"
        information="분류 정보는 이벤트식별자, 매체식별자를 조회한 다음 선택이 가능합니다."
      >
        <Select
          name="giftId"
          control={control}
          label="카테고리"
          placeholder="전체"
          options={[
            { label: "GFT000124", value: "GFT000124" },
            { label: "GFT000123", value: "GFT000123" },
          ]}
          defaultValue={""}
          // register={register("useYn")}
          totalColSpan={{ xs: 12, sm: 3 }}
          labelColSpan={{ xs: 12, lg: 4 }}
          inputColSpan={{ xs: 12, lg: 8 }}
          disabled
        />
        <Select
          name="brandName"
          control={control}
          label="브랜드"
          placeholder="전체"
          options={[{ label: "스타벅스", value: "스타벅스" }]}
          defaultValue={""}
          // register={register("useYn")}
          totalColSpan={{ xs: 12, sm: 3 }}
          labelColSpan={{ xs: 12, lg: 4 }}
          inputColSpan={{ xs: 12, lg: 8 }}
          disabled
        />
      </Detail>
    );
  }
);

export default ProductMngDetailTypeWidget;
