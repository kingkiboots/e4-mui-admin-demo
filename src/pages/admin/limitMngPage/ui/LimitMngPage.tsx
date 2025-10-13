import PageContentLayout from "@/widgets/admin/common/ui/PageContentLayout";
import Meta from "./Meta";
import LimitMngSearchbarWidget from "@/widgets/admin/limitMng/ui/LimitMngSearchbarWidget";

const LimitMngPage = () => {
  return (
    <Meta>
      <PageContentLayout>
        <LimitMngSearchbarWidget />
      </PageContentLayout>
    </Meta>
  );
};

export default LimitMngPage;
