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
import type { ProductMngListSearchData } from "@/entities/admin/productMng/types";
import { defaultProductListSearchParams } from "@/features/admin/productMng/model/getProductListHandler";

const ProductMngPage = () => {
  const [alerts, setAlerts] = useState(false);

  //NOTE - 목록 검색 params state
  const [productListSearchParams, setProductListSearchParams] =
    useState<ProductMngListSearchData>(defaultProductListSearchParams);

  return (
    <Meta>
      <PageContentLayout>
        <ProductMngSearchbarWidget
          setProductListSearchParams={setProductListSearchParams}
        />
        <ProductMngDetailEventWidget />
        <ProductMngDetailCompWidget />
        <ProductMngDetailTypeWidget />
        <ProductMngButtonGroupWidget setAlert={setAlerts} />
        <ProductMngListWidget
          productListSearchParams={productListSearchParams}
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
