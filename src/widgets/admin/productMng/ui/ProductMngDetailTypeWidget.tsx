import { Detail } from "@/shared/ui/DetailUI";
import { Select } from "@/shared/ui/SelectUI";
import { memo } from "react";

const ProductMngDetailTypeWidget = memo(() => {
  return (
    <Detail
      key={"product-mng-detail-info"}
      title="분류 정보"
      information="분류 정보는 이벤트식별자, 매체식별자를 조회한 다음 선택이 가능합니다."
    >
      <Select
        label="카테고리"
        options={[
          {
            label: "Y",
            value: "Y",
          },
          {
            label: "N",
            value: "N",
          },
        ]}
        defaultValue={"Y"}
        // register={register("useYn")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
      />
      <Select
        label="브랜드"
        options={[
          {
            label: "Y",
            value: "Y",
          },
          {
            label: "N",
            value: "N",
          },
        ]}
        defaultValue={"Y"}
        // register={register("useYn")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
      />
    </Detail>
  );
});

export default ProductMngDetailTypeWidget;
