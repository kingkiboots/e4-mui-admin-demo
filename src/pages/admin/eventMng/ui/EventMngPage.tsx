import PageContentLayout from "@/widgets/admin/common/ui/PageContentLayout";
import Meta from "./Meta";
import EventMngSearchbarWidget from "@/widgets/admin/eventMng/ui/EventMngSearchbarWidget";
import EventMngInfoWidget from "@/widgets/admin/eventMng/ui/EventMngInfoWidget";
import { EventMngListWidget } from "@/widgets/admin/eventMng/ui/EventMngListWidget";

const EventMngPage = () => {
  return (
    <Meta>
      <PageContentLayout>
        <EventMngSearchbarWidget />
        <EventMngInfoWidget />
        <EventMngListWidget />
      </PageContentLayout>
    </Meta>
  );
};

export default EventMngPage;
