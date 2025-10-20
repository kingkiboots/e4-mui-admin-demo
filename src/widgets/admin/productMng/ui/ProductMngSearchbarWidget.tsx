import type { ProductMngListSearchData } from "@/entities/admin/productMng/types";
import { useSearchProductList } from "@/features/admin/productMng/lib/useSearchProductList";
import type { SearchbarButtonGroupProps } from "@/shared/ui/SearchbarButtonGroupUI";
import { Searchbar } from "@/shared/ui/SearchbarUI";
import { SearchInput } from "@/shared/ui/SearchInputUI";
import type { Dispatch, SetStateAction } from "react";
import { memo, useMemo } from "react";
import ProductMngAccountSearchModal from "../modal/ProductMngAccountSearchModal";
import ProductMngEventSearchModal from "../modal/ProductMngEventSearchModal";

interface ProductMngSearchbarWidgetProps {
  setProductListSearchParams: Dispatch<
    SetStateAction<ProductMngListSearchData>
  >;
}

const ProductMngSearchbarWidget = memo<ProductMngSearchbarWidgetProps>(
  ({ setProductListSearchParams }) => {
    const { control, reset, handleSearchClick } = useSearchProductList({
      setProductListSearchParams,
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
          <SearchInput
            name="serviceCd"
            control={control}
            label="이벤트식별자"
            labelColSpan={{ xs: 12, sm: 4 }}
            inputColSpan={{ xs: 12, sm: 8 }}
            required
            placeholder="이벤트식별자 조회"
            SearchModal={ProductMngEventSearchModal}
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
  }
);

ProductMngSearchbarWidget.displayName = "ProductMngSearchbarWidget";
export default ProductMngSearchbarWidget;
