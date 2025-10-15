import PageContentLayout from "@/widgets/admin/common/ui/PageContentLayout";
import Meta from "./Meta";
import PushMsgMngSearchbarWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngSearchbarWidget";
import PushMsgMngMsgListWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngMsgListWidget";
import PushMsgMngMsgDetailWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngMsgDetailWidget";

const PushMsgMngPage = () => {
  return (
    <Meta>
      <PageContentLayout>
        <PushMsgMngSearchbarWidget />
        <PushMsgMngMsgDetailWidget />
        <PushMsgMngMsgListWidget />
      </PageContentLayout>
    </Meta>
  );
};

export default PushMsgMngPage;
