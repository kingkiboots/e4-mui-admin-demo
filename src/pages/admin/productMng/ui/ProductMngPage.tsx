import PageContentLayout from "@/widgets/admin/common/ui/PageContentLayout";
import Meta from "./Meta";
import ProductMngSearchbarWidget from "@/widgets/admin/productMng/ui/ProductMngSearchbarWidget";
import { ProductMngListWidget } from "@/widgets/admin/productMng/ui/ProductMngListWidget";
import { ProductMngDetailWidget } from "@/widgets/admin/productMng/ui/ProductMngDetailWidget";

const ProductMngPage = () => {
  return (
    <Meta>
      <PageContentLayout>
        <ProductMngSearchbarWidget />
        <ProductMngDetailWidget/>
        <ProductMngListWidget />
      </PageContentLayout>
    </Meta>
  );
};

export default ProductMngPage;
