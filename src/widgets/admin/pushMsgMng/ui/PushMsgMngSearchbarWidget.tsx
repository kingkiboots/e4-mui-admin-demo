import type { PushMsgMngListSearchData } from "@/entities/admin/pushMsgMng/types";
import type { SearchbarButtonGroupProps } from "@/shared/ui/SearchbarButtonGroupUI";
import { Searchbar } from "@/shared/ui/SearchbarUI";
import { TextField } from "@/shared/ui/TextFieldUI";
import { memo, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

const PushMsgMngSearchbarWidget = memo(() => {
  const {
    control,
    reset,
    getValues,
    setValue,
    handleSubmit,
    // formState: { errors },
  } = useForm<PushMsgMngListSearchData>();

  const buttonsDef: SearchbarButtonGroupProps = {
    onClickSearch: () => {
      console.log('getValues("serviceCd")123', getValues("serviceCd"));
      const handleValid: SubmitHandler<PushMsgMngListSearchData> = (data) => {
        console.log(data);
      };
      handleSubmit(handleValid)();
    },
    onClickClearSearchbar: () => {
      reset();
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setValue("serviceCd", "mother fucker");
    }, 2000);
  }, []);

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
});

PushMsgMngSearchbarWidget.displayName = "PushMsgMngSearchbarWidget";
export default PushMsgMngSearchbarWidget;
