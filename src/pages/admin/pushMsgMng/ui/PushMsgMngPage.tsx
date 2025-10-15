import PageContentLayout from "@/widgets/admin/common/ui/PageContentLayout";
import Meta from "./Meta";
import PushMsgMngSearchbarWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngSearchbarWidget";
import PushMsgMngMsgListWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngMsgListWidget";

const PushMsgMngPage = () => {
  return (
    <Meta>
      <PageContentLayout>
        <PushMsgMngSearchbarWidget />
        <PushMsgMngMsgListWidget />
      </PageContentLayout>
    </Meta>
  );
};

export default PushMsgMngPage;
