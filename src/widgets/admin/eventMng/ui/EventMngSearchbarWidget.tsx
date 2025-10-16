import type { SearchbarButtonGroupProps } from "@/shared/ui/SearchbarButtonGroupUI";
import { Searchbar } from "@/shared/ui/SearchbarUI";
import { Select, type SelectOption } from "@/shared/ui/SelectUI";
import { memo } from "react";

const EventMngSearchbarWidget = memo(() => {
  const options: SelectOption[] = [
    { value: "0", label: "전체" },
    { value: "1", label: "이벤트_1" },
    { value: "2", label: "이벤트_2" },
    { value: "3", label: "이벤트_3" },
  ];


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
          표준데이터 시스템에 <span>혜택이벤트 코드</span>를 등록 후 이벤트
          설정이 가능합니다.
        </>
      }
    >
      <Searchbar.InputsArea>
        <Select
          label="이벤트"
          options={options}
          defaultValue={"0"}
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
        />
      </Searchbar.InputsArea>
    </Searchbar>
  );
});

EventMngSearchbarWidget.displayName = "EventMngSearchbarWidget";
export default EventMngSearchbarWidget;
