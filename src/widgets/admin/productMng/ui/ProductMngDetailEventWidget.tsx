import { DatePickerField } from "@/shared/ui/DatePickerFieldUI";
import { Detail } from "@/shared/ui/DetailUI";
import { Select } from "@/shared/ui/SelectUI";
import { TextField } from "@/shared/ui/TextFieldUI";
import { memo } from "react";
import { useForm } from "react-hook-form";
import type { Dayjs } from "dayjs";

interface SearchFormData {
  account: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
}

const ProductMngDetailEventWidget = memo(() => {
  const { control } = useForm<SearchFormData>();

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
      <DatePickerField
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
        name="startDate"
        control={control}
        dateTimeType="start"
        label="시작일자"
        placeholder="시작일"
      />
      <DatePickerField
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
        name="endDate"
        control={control}
        dateTimeType="end"
        label="종료일자"
        placeholder="종료일"
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
