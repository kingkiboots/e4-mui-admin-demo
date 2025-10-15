import { DatePickerField } from "@/shared/ui/DatePickerFieldUI";
import type { SearchbarButtonGroupProps } from "@/shared/ui/SearchbarButtonGroupUI";
import { Searchbar } from "@/shared/ui/SearchbarUI";
import { Select, type SelectOption } from "@/shared/ui/SelectUI";
import { TextField } from "@/shared/ui/TextFieldUI";
import type { Dayjs } from "dayjs";
import { memo } from "react";
import { useForm } from "react-hook-form";

interface SearchFormData {
  account: string;
  startDate: Dayjs | null;
}

const eventMngSearchbarWidget = memo(() => {
  const options: SelectOption[] = [
    { value: "1", label: "이벤트_1" },
    { value: "2", label: "이벤트_2" },
    { value: "3", label: "이벤트_3" },
  ];

  const { register, control } = useForm<SearchFormData>();

  const buttonsDef: SearchbarButtonGroupProps = {
    onClickSearch: () => {
      console.log("부다");
    },
    onClickClearSearchbar: () => {
      console.log("페슽");
    },
  };

  return (
    <Searchbar
      buttonsDef={buttonsDef}
      information={
        <>
          표준데이터 시스셈테 <span>혜택이벤트 코드</span>를 등록 후 이벤트
          설정이 가능합니다.
        </>
      }
    >
      <Searchbar.InputsArea>
        <Select
          label="이벤트"
          options={options}
          defaultValue={"1"}
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
        />
        <TextField
          label="계좌번호"
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          register={register("account", {
            required: true,
          })}
          required
        />
        <DatePickerField
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          name="startDate"
          control={control}
          dateTimeType="start"
          label="시작일"
          placeholder="날짜 선택"
          rules={{
            required: true,
          }}
        />
      </Searchbar.InputsArea>
    </Searchbar>
  );
});

export default eventMngSearchbarWidget;
