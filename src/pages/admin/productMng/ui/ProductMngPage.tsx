import PageContentLayout from "@/widgets/admin/common/ui/PageContentLayout";
import Meta from "./Meta";
import ProductMngSearchbarWidget from "@/widgets/admin/productMng/ui/ProductMngSearchbarWidget";
import { ProductMngListWidget } from "@/widgets/admin/productMng/ui/ProductMngListWidget";

const ProductMngPage = () => {
  return (
    <Meta>
      <PageContentLayout>
        <ProductMngSearchbarWidget />
        <ProductMngListWidget />
      </PageContentLayout>
    </Meta>
  );
};

export default ProductMngPage;
