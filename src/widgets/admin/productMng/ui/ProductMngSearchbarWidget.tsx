import type { ProductMngListSearchData } from "@/entities/admin/productMng/types";
import type { SearchbarButtonGroupProps } from "@/shared/ui/SearchbarButtonGroupUI";
import { Searchbar } from "@/shared/ui/SearchbarUI";
import { SearchInput } from "@/shared/ui/SearchInputUI";
import { memo, useCallback } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import ProductMngAccountSearchModal from "../modal/ProductMngAccountSearchModal";

const ProductMngSearchbarWidget = memo(() => {
  const { reset, control, handleSubmit } = useForm<ProductMngListSearchData>();

  const buttonsDef: SearchbarButtonGroupProps = {
    onClickSearch: () => {
      const handleValid: SubmitHandler<ProductMngListSearchData> = (data) => {
        console.log(data);
      };
      handleSubmit(handleValid)();
    },
    onClickClearSearchbar: useCallback(() => {
      reset();
    }, [reset]),
  };

  return (
    <Searchbar buttonsDef={buttonsDef}>
      <Searchbar.InputsArea>
        <SearchInput
          name="serviceCd"
          control={control}
          label="이벤트식별자"
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          required
          placeholder="이벤트식별자 조회"
          SearchModal={ProductMngAccountSearchModal}
        />
        <SearchInput
          name="seq"
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
