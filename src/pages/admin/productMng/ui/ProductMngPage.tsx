import PageContentLayout from "@/widgets/admin/common/ui/PageContentLayout";
import Meta from "./Meta";
import ProductMngSearchbarWidget from "@/widgets/admin/productMng/ui/ProductMngSearchbarWidget";
import ProductMngDetailEventWidget from "@/widgets/admin/productMng/ui/ProductMngDetailEventWidget";
import ProductMngDetailCompWidget from "@/widgets/admin/productMng/ui/ProductMngDetailCompWidget";
import ProductMngDetailTypeWidget from "@/widgets/admin/productMng/ui/ProductMngDetailTypeWidget";
import ProductMngListWidget from "@/widgets/admin/productMng/ui/ProductMngListWidget";
import ProductMngButtonGroupWidget from "@/widgets/admin/productMng/ui/ProductMngButtonGroupWidget";
import { Dialog } from "@/shared/ui/DialogUI";
import { useState } from "react";
import type {
  ProductMngDetailData,
  ProductMngListSearchData,
} from "@/entities/admin/productMng/types";
import { defaultProductListSearchParams } from "@/features/admin/productMng/model/getProductListHandler";
import { useForm } from "react-hook-form";

const ProductMngPage = () => {
  const [alerts, setAlerts] = useState(false);

  //NOTE - 상세정보 UseForm
  const { control, setValue, handleSubmit, reset } =
    useForm<ProductMngDetailData>();

  //NOTE - 목록 검색 params state
  const [productListSearchParams, setProductListSearchParams] =
    useState<ProductMngListSearchData>(defaultProductListSearchParams);

  //NOTE - state that indicates whether row in the list is double clicked (han-geul not working T.T)
  const [isUpdatingDetail, setIsUpdatingDetail] = useState<boolean>(false);

  return (
    <Meta>
      <PageContentLayout>
        <ProductMngSearchbarWidget
          setProductListSearchParams={setProductListSearchParams}
        />
        <ProductMngDetailEventWidget
          isUpdatingDetail={isUpdatingDetail}
          detailFormControl={control}
        />
        <ProductMngDetailCompWidget
          isUpdatingDetail={isUpdatingDetail}
          detailFormControl={control}
        />
        <ProductMngDetailTypeWidget
          isUpdatingDetail={isUpdatingDetail}
          detailFormControl={control}
        />
        <ProductMngButtonGroupWidget
          setAlert={setAlerts}
          isUpdatingDetail={isUpdatingDetail}
          setIsUpdatingDetail={setIsUpdatingDetail}
          resetDetailForm={reset}
          handleSubmitDetailForm={handleSubmit}
        />
        <ProductMngListWidget
          productListSearchParams={productListSearchParams}
          setIsUpdatingDetail={setIsUpdatingDetail}
          detailFormSetValue={setValue}
        />
        <Dialog
          type="alert"
          title="완료"
          description="저장이 완료 되었습니다."
          open={alerts}
          setOpen={setAlerts}
        />
      </PageContentLayout>
    </Meta>
  );
};

export default ProductMngPage;
