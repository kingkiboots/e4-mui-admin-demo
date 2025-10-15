import { DatePickerField } from "@/shared/ui/DatePickerFieldUI";
import type { SearchbarButtonGroupProps } from "@/shared/ui/SearchbarButtonGroupUI";
import { Searchbar } from "@/shared/ui/SearchbarUI";
import { Select, type SelectOption } from "@/shared/ui/SelectUI";
import { TextField } from "@/shared/ui/TextFieldUI";
import type { Dayjs } from "dayjs";
import { memo } from "react";
import { useForm } from "react-hook-form";

interface SearchFormData {
  eventId :string;
  account: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  regDeptId: string;
  regStaffId: string;
}

const EventMngInfoWidget = memo(() => {
  const delYnOptions: SelectOption[] = [
    { value: "Y", label: "Y" },
    { value: "N", label: "N" },
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
    <Searchbar buttonsDef={buttonsDef} >
      <Searchbar.InputsArea>
         <TextField
          label="이벤트명"
          name="eventId"
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          required
        />
        <DatePickerField
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          name="startDate"
          control={control}
          dateTimeType="start"
          label="시작일자"
          placeholder="날짜 선택"
          rules={{
            required: true,
          }}
        />
        <DatePickerField
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          name="endDate"
          control={control}
          dateTimeType="end"
          label="종료일자"
          placeholder="날짜 선택"
          rules={{
            required: true,
          }}
        />
        <Select
          label="삭제여부"
          options={delYnOptions}
          name="delYn"
          defaultValue={"1"}
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          required
        />

        <TextField
          label="등록부서식별자"
          register={register("regDeptId")}
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
        />

        <TextField
          label="등록스테프식별자"
          register={register("regStaffId")}
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
        />
      </Searchbar.InputsArea>
    </Searchbar>
  );
});

EventMngInfoWidget.displayName = "EventMngInfoWidget";
export default EventMngInfoWidget;
