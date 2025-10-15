import PageContentLayout from "@/widgets/admin/common/ui/PageContentLayout";
import Meta from "./Meta";
import PushMsgMngSearchbarWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngSearchbarWidget";

const EventMngPage = () => {
  return (
    <Meta>
      <PageContentLayout>
        <PushMsgMngSearchbarWidget />
      </PageContentLayout>
    </Meta>
  );
};

export default EventMngPage;
