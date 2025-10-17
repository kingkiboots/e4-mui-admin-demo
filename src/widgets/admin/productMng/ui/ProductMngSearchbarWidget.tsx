import type { SearchbarButtonGroupProps } from "@/shared/ui/SearchbarButtonGroupUI";
import { Searchbar } from "@/shared/ui/SearchbarUI";
import { SearchInput } from "@/shared/ui/SearchInputUI";
import type { Dayjs } from "dayjs";
import { memo, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import ProductMngAccountSearchModal from "../modal/ProductMngAccountSearchModal";

interface SearchFormData {
  account: string;
  startDate: Dayjs | null;
}

const ProductMngSearchbarWidget = memo(() => {
  const { reset, watch, setValue, control } = useForm<SearchFormData>({});

  const buttonsDef: SearchbarButtonGroupProps = {
    onClickSearch: () => {
      console.log("부다");
    },
    onClickClearSearchbar: useCallback(() => {
      reset();
    }, [reset]),
  };

  useEffect(() => {
    setTimeout(() => {
      setValue("account", "hello mother fucker");
    }, 5000);
  }, [watch("account")]);

  console.log('watch("account")', watch("account"));

  return (
    <Searchbar buttonsDef={buttonsDef}>
      <Searchbar.InputsArea>
        <SearchInput
          name="account"
          control={control}
          label="이벤트식별자"
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          required
          placeholder="이벤트식별자 조회"
          SearchModal={ProductMngAccountSearchModal}
        />
        <SearchInput
          name="account"
          control={control}
          label="매체식별자"
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          required
          placeholder="매체식별자 조회"
          SearchModal={ProductMngAccountSearchModal}
        />
      </Searchbar.InputsArea>
    </Searchbar>
  );
});

export default ProductMngSearchbarWidget;
