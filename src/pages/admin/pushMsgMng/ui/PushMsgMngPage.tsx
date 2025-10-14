import PageContentLayout from "@/widgets/admin/common/ui/PageContentLayout";
import Meta from "./Meta";
import PushMsgMngSearchbarWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngSearchbarWidget";

const PushMsgMngPage = () => {
  return (
    <Meta>
      <PageContentLayout>
        <PushMsgMngSearchbarWidget />
      </PageContentLayout>
    </Meta>
  );
};

export default PushMsgMngPage;
