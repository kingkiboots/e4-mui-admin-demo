import type { EventMngListSearchData } from "@/entities/admin/eventMng/types";
import { useSearchEventList } from "@/features/admin/eventMng/lib/useSearchEventList";
import type { SearchbarButtonGroupProps } from "@/shared/ui/SearchbarButtonGroupUI";
import { Searchbar } from "@/shared/ui/SearchbarUI";
import { Select } from "@/shared/ui/SelectUI";
import type { Dispatch, SetStateAction } from "react";
import { memo, useMemo } from "react";

interface EventMngSearchbarWidgetProps {
  setEventListSearchParams: Dispatch<SetStateAction<EventMngListSearchData>>;
}

const EventMngSearchbarWidget = memo<EventMngSearchbarWidgetProps>(
  ({ setEventListSearchParams }) => {
    const { control, reset, handleSearchClick } = useSearchEventList({
      setEventListSearchParams,
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
      <Searchbar
        buttonsDef={buttonsDef}
        information={
          <>
            표준데이터 시스템에 <span>혜택이벤트 코드</span>를 등록 후 이벤트
            설정이 가능합니다.
          </>
        }
      >
        <Searchbar.InputsArea>
          <Select
            name="eventType"
            control={control}
            label="이벤트"
            options={[
              { value: "전체", label: "전체" },
              { value: "EVT001", label: "EVT001" },
              { value: "EVT002", label: "EVT002" },
            ]}
            defaultValue={"전체"}
            totalColSpan={{ xs: 12, sm: 4 }}
            labelColSpan={{ xs: 12, sm: 4 }}
            inputColSpan={{ xs: 12, sm: 8 }}
          />
        </Searchbar.InputsArea>
      </Searchbar>
    );
  }
);

EventMngSearchbarWidget.displayName = "EventMngSearchbarWidget";
export default EventMngSearchbarWidget;
