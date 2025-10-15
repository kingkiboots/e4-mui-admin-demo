import { Detail } from "@/shared/ui/DetailUI";
import { Select } from "@/shared/ui/SelectUI";
import { TextField } from "@/shared/ui/TextFieldUI";
import { memo } from "react";

const ProductMngDetailCompWidget = memo(() => {
  return (
    <Detail
      key={"product-mng-detail-info"}
      title="매체 정보"
      information="상품 전시 목록 생성 전 매체식별자가 해당 이벤트에 적합한지 반드시 확인해주세요"
    >
      <TextField
        label="매체명"
        placeholder="테스트이벤트2"
        // register={register("serviceCd")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
      />
      <TextField
        label="상품제공자코드"
        placeholder="UMS서비스코드 입력"
        // register={register("serviceCd")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
      />
      <TextField
        label="업무로델코드"
        placeholder="UMS서비스코드 입력"
        // register={register("serviceCd")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
      />
      <Select
        label="삭제여부"
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

export default ProductMngDetailCompWidget;
