import type { PushMsgListSearchParams } from "@/entities/admin/pushMsgMng/types";
import { useSearchPushMsgList } from "@/features/admin/pushMsgMng/lib/useSearchPushMsgList";
import type { SearchbarButtonGroupProps } from "@/shared/ui/SearchbarButtonGroupUI";
import { Searchbar } from "@/shared/ui/SearchbarUI";
import { TextField } from "@/shared/ui/TextFieldUI";
import type { Dispatch, SetStateAction } from "react";
import { memo, useMemo } from "react";

interface PushMsgMngSearchbarWidgetProps {
  setPushMsgListSearchParams: Dispatch<SetStateAction<PushMsgListSearchParams>>;
}
const PushMsgMngSearchbarWidget = memo<PushMsgMngSearchbarWidgetProps>(
  ({ setPushMsgListSearchParams }) => {
    const { control, reset, handleSearchClick } = useSearchPushMsgList({
      setPushMsgListSearchParams,
    });

    const buttonsDef: SearchbarButtonGroupProps = useMemo(
      () => ({
        onClickSearch: handleSearchClick,
        onClickClearSearchbar: () => {
          reset();
        },
      }),
      [reset, handleSearchClick]
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
