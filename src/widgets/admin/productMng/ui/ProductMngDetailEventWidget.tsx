import { Select, type SelectOption } from "@/shared/ui/SelectUI";
import { TextField } from "@/shared/ui/TextFieldUI";
import { Detail } from "@/shared/ui/DetailUI";

export const ProductMngDetailEventWidget = () => {
  const options: SelectOption[] = [
    { value: "1", label: "하나" },
    { value: "2", label: "둘" },
    { value: "3", label: "셋" },
  ];
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
      <Select
        label="한도구분"
        options={options}
        defaultValue={"1"}
        labelColSpan={{ xs: 4, sm: 4 }}
        inputColSpan={{ xs: 12, sm: 8 }}
      />
      <TextField
        label="계좌번호"
        labelColSpan={{ xs: 12, sm: 4 }}
        inputColSpan={{ xs: 12, sm: 8 }}
        // register={register("account", {
        //   required: true,
        // })}
        required
      />
    </Detail>
  );
};
