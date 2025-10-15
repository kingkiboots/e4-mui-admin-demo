import type { EventMngInfoData } from "@/entities/admin/eventMng/types";
import { DatePickerField } from "@/shared/ui/DatePickerFieldUI";
import { Detail } from "@/shared/ui/DetailUI";
import { Select } from "@/shared/ui/SelectUI";
import { TextField } from "@/shared/ui/TextFieldUI";
import { memo } from "react";
import { SELECT_OPTION_YN, USE_YN_Y } from "@/shared/const/dataConst";
import { useForm } from "react-hook-form";

const EventMngInfoWidget = memo(() => {
   const { register,control } = useForm<EventMngInfoData>();

  return (
    <Detail title="이벤트 정보">
         <TextField
          label="이벤트명"
          register={register("eventId")}
          totalColSpan={{ xs: 12, sm: 3 }}
          labelColSpan={{ xs: 12, lg: 4 }}
          inputColSpan={{ xs: 12, lg: 8 }}
          required
        />
        <DatePickerField
          totalColSpan={{ xs: 12, sm: 3 }}
          labelColSpan={{ xs: 12, lg: 4 }}
          inputColSpan={{ xs: 12, lg: 8 }}
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
          totalColSpan={{ xs: 12, sm: 3 }}
          labelColSpan={{ xs: 12, lg: 4 }}
          inputColSpan={{ xs: 12, lg: 8 }}
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
          options={SELECT_OPTION_YN}
          register={register("delYn")}
          defaultValue={USE_YN_Y}
          totalColSpan={{ xs: 12, sm: 3 }}
          labelColSpan={{ xs: 12, lg: 4 }}
          inputColSpan={{ xs: 12, lg: 8 }}
          required
        />

        <TextField
          label="등록부서식별자"
          register={register("regDeptId")}
          totalColSpan={{ xs: 12, sm: 3 }}
          labelColSpan={{ xs: 12, lg: 4 }}
          inputColSpan={{ xs: 12, lg: 8 }}
        />

        <TextField
          label="등록스테프식별자"
          register={register("regStaffId")}
          totalColSpan={{ xs: 12, sm: 3 }}
          labelColSpan={{ xs: 12, lg: 4 }}
          inputColSpan={{ xs: 12, lg: 8 }}
        />
    </Detail>
  );
});

EventMngInfoWidget.displayName = "EventMngInfoWidget";
export default EventMngInfoWidget;
