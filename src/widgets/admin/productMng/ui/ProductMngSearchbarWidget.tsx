import type { SearchbarButtonGroupProps } from "@/shared/ui/SearchbarButtonGroupUI";
import { Searchbar } from "@/shared/ui/SearchbarUI";
import { SearchInput } from "@/shared/ui/SearchInputUI";
import { Select, type SelectOption } from "@/shared/ui/SelectUI";
import type { Dayjs } from "dayjs";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { ProductMngAccountSearchModal } from "../modal/ProductMngAccountSearchModal";

interface SearchFormData {
  account: string;
  startDate: Dayjs | null;
}

const ProductMngSearchbarWidget = memo(() => {
  const options: SelectOption[] = [
    { value: "1", label: "하나" },
    { value: "2", label: "둘" },
    { value: "3", label: "셋" },
  ];

  const { register } = useForm<SearchFormData>();

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
        <Select
          label="이벤트식별자"
          options={options}
          defaultValue={"1"}
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          required
        />
        <SearchInput
          label="매체식별자"
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          register={register("account", {
            required: true,
          })}
          required
          placeholder="매체식별자 입력"
          SearchModal={ProductMngAccountSearchModal}
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

export default ProductMngSearchbarWidget;
