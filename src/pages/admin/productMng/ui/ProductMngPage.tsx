import PageContentLayout from "@/widgets/admin/common/ui/PageContentLayout";
import Meta from "./Meta";
import ProductMngSearchbarWidget from "@/widgets/admin/productMng/ui/ProductMngSearchbarWidget";
import { ProductMngListWidget } from "@/widgets/admin/productMng/ui/ProductMngListWidget";
import { ProductMngDetailEventWidget } from "@/widgets/admin/productMng/ui/ProductMngDetailEventWidget";
import { ProductMngDetailCompWidget } from "@/widgets/admin/productMng/ui/ProductMngDetailCompWidget";
import { ProductMngDetailTypeWidget } from "@/widgets/admin/productMng/ui/ProductMngDetailTypeWidget";

const ProductMngPage = () => {
  return (
    <Meta>
      <PageContentLayout>
        <ProductMngSearchbarWidget />
        <ProductMngDetailEventWidget />
        <ProductMngDetailCompWidget />
        <ProductMngDetailTypeWidget />
        <ProductMngListWidget />
      </PageContentLayout>
    </Meta>
  );
};

export default ProductMngPage;
