import { Detail } from "@/shared/ui/DetailUI";
import { Select } from "@/shared/ui/SelectUI";
import { TextField } from "@/shared/ui/TextFieldUI";
import { memo } from "react";

const ProductMngDetailEventWidget = memo(() => {
  return (
    <Detail
      key={"product-mng-detail-info"}
      title="이벤트 정보"
      information={
        <>
          이벤트 정보의 혜택유형이 <span>[상품권]</span>이 아닐 경우 해당 상품권
          서비스를 이용할 수 없습니다.
        </>
      }
    >
      <TextField
        label="이벤트명"
        placeholder="테스트이벤트2"
        // register={register("serviceCd")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
      />
      <TextField
        label="시작일자"
        placeholder="UMS서비스코드 입력"
        // register={register("serviceCd")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
      />
      <TextField
        label="종료일자"
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
      <Select
        label="혜택유형"
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
        disabled={true}
        defaultValue={"Y"}
        // register={register("useYn")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
      />
    </Detail>
  );
});

export default ProductMngDetailEventWidget;
