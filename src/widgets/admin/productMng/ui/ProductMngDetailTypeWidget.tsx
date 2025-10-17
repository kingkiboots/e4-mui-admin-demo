import type { ProductMngDetailTypeData } from "@/entities/admin/productMng/types";
import { USE_YN_Y } from "@/shared/const";
import { Detail } from "@/shared/ui/DetailUI";
import { Select } from "@/shared/ui/SelectUI";
import { memo } from "react";
import { useForm } from "react-hook-form";

const ProductMngDetailTypeWidget = memo(() => {
  const { control } = useForm<ProductMngDetailTypeData>();
  return (
    <Detail
      key={"product-mng-detail-info"}
      title="분류 정보"
      information="분류 정보는 이벤트식별자, 매체식별자를 조회한 다음 선택이 가능합니다."
    >
      <Select
        name="category"
        control={control}
        label="카테고리"
        placeholder="전체"
        options={[]}
        defaultValue={USE_YN_Y}
        // register={register("useYn")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
        disabled
      />
      <Select
        name="brand"
        control={control}
        label="브랜드"
        placeholder="전체"
        options={[]}
        defaultValue={USE_YN_Y}
        // register={register("useYn")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
        disabled
      />
    </Detail>
  );
});

export default ProductMngDetailTypeWidget;
