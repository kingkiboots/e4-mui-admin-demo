import type { PushMsgListSearchParams } from "@/entities/admin/pushMsgMng/types";
import { defaultPushMsgListSearchParams } from "@/features/admin/pushMsgMng/model/getPushMsgListHandler";
import type { SearchbarButtonGroupProps } from "@/shared/ui/SearchbarButtonGroupUI";
import { Searchbar } from "@/shared/ui/SearchbarUI";
import { TextField } from "@/shared/ui/TextFieldUI";
import type { SetStateAction } from "react";
import type { Dispatch } from "react";
import { useMemo } from "react";
import { memo } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface PushMsgMngSearchbarWidgetProps {
  setPushMsgListSearchParams: Dispatch<SetStateAction<PushMsgListSearchParams>>;
}
const PushMsgMngSearchbarWidget = memo<PushMsgMngSearchbarWidgetProps>(
  ({ setPushMsgListSearchParams }) => {
    const {
      control,
      reset,
      handleSubmit,
      // formState: { errors },
    } = useForm<PushMsgListSearchParams>({
      defaultValues: defaultPushMsgListSearchParams,
    });

    const buttonsDef: SearchbarButtonGroupProps = useMemo(
      () => ({
        onClickSearch: () => {
          const handleValid: SubmitHandler<PushMsgListSearchParams> = (
            data
          ) => {
            setPushMsgListSearchParams(data);
          };
          handleSubmit(handleValid)();
        },
        onClickClearSearchbar: () => {
          reset();
        },
      }),
      [reset, handleSubmit, setPushMsgListSearchParams]
    );

    return (
      <Searchbar buttonsDef={buttonsDef}>
        <Searchbar.InputsArea>
          <TextField
            name="serviceCd"
            control={control}
            label="UMS 서비스코드"
            labelColSpan={{ xs: 12, sm: 4 }}
            inputColSpan={{ xs: 12, sm: 8 }}
            placeholder="UMS 서비스코드 입력"
          />
          <TextField
            name="seq"
            control={control}
            label="푸시 일련번호"
            labelColSpan={{ xs: 12, sm: 4 }}
            inputColSpan={{ xs: 12, sm: 8 }}
            placeholder="푸시 일련번호 입력"
          />
        </Searchbar.InputsArea>
      </Searchbar>
    );
  }
);

PushMsgMngSearchbarWidget.displayName = "PushMsgMngSearchbarWidget";
export default PushMsgMngSearchbarWidget;
