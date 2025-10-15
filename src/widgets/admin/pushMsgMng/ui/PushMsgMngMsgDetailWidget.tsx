import type { PushMsgMngDetailData } from "@/entities/admin/pushMsgMng/types";
import { SELECT_OPTION_YN, USE_YN_Y } from "@/shared/const/dataConst";
import { Detail } from "@/shared/ui/DetailUI";
import { Select } from "@/shared/ui/SelectUI";
import { TextField } from "@/shared/ui/TextFieldUI";
import { memo } from "react";
import { useForm } from "react-hook-form";

const PushMsgMngMsgDetailWidget = memo(() => {
  const { register } = useForm<PushMsgMngDetailData>();

  return (
    <Detail title="메시지 상세정보">
      <TextField
        label="UMS서비스코드"
        placeholder="UMS서비스코드 입력"
        register={register("serviceCd")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
      />
      <TextField
        label="푸쉬일련번호"
        placeholder="푸쉬일련번호 입력"
        register={register("seq")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
      />
      <TextField
        label="푸쉬제목"
        placeholder="푸쉬제목 입력"
        register={register("name")}
        totalColSpan={{ xs: 12, sm: 6 }}
        labelColSpan={{ xs: 12, lg: 2 }}
        inputColSpan={{ xs: 12, lg: 10 }}
      />
      <TextField
        label="푸쉬내용"
        placeholder="푸쉬내용 입력"
        register={register("content")}
        totalColSpan={{ xs: 12, sm: 6 }}
        labelColSpan={{ xs: 12, lg: 2 }}
        inputColSpan={{ xs: 12, lg: 10 }}
      />
      <TextField
        label="푸쉬URL"
        placeholder="푸쉬URL 입력"
        register={register("content")}
        totalColSpan={{ xs: 12, sm: 4 }}
        labelColSpan={{ xs: 12, lg: 3 }}
        inputColSpan={{ xs: 12, lg: 9 }}
      />
      <Select
        label="사용여부"
        options={SELECT_OPTION_YN}
        defaultValue={USE_YN_Y}
        register={register("useYn")}
        totalColSpan={{ xs: 12, sm: 2 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
      />
    </Detail>
  );
});

PushMsgMngMsgDetailWidget.displayName = "PushMsgMngMsgDetailWidget";
export default PushMsgMngMsgDetailWidget;
