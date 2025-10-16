import type { PushMsgMngListSearchData } from "@/entities/admin/pushMsgMng/types";
import type { SearchbarButtonGroupProps } from "@/shared/ui/SearchbarButtonGroupUI";
import { Searchbar } from "@/shared/ui/SearchbarUI";
import { TextField } from "@/shared/ui/TextFieldUI";
import { memo } from "react";
import { useForm } from "react-hook-form";

const PushMsgMngSearchbarWidget = memo(() => {
  const { register } = useForm<PushMsgMngListSearchData>();

  const buttonsDef: SearchbarButtonGroupProps = {
    onClickSearch: () => {
      console.log("부다");
    },
    onClickClearSearchbar: () => {
      console.log("페슽");
    },
  };

  return (
    <Searchbar buttonsDef={buttonsDef}>
      <Searchbar.InputsArea>
        <TextField
          label="UMS 서비스코드"
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          register={register("serviceCd")}
          placeholder="UMS 서비스코드 입력"
        />
        <TextField
          label="푸시 일련번호"
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          register={register("serviceCd")}
          placeholder="푸시 일련번호 입력"
        />
      </Searchbar.InputsArea>
      {/* <Searchbar.ButtonsArea>
        <Button size="small" color="info" variant="contained">
          <SearchIcon />
          &nbsp; 조회
        </Button>
        <Button size="small" color="dark" variant="contained">
          <ClearIcon fontSize="small" />
        </Button>
      </Searchbar.ButtonsArea> */}
    </Searchbar>
  );
});

PushMsgMngSearchbarWidget.displayName = "PushMsgMngSearchbarWidget";
export default PushMsgMngSearchbarWidget;
