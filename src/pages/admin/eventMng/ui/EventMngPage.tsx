import PageContentLayout from "@/widgets/admin/common/ui/PageContentLayout";
import Meta from "./Meta";
import EventMngSearchbarWidget from "@/widgets/admin/eventMng/ui/EventMngSearchbarWidget";
import EventMngInfoWidget from "@/widgets/admin/eventMng/ui/EventMngDetailWidget";
import { EventMngListWidget } from "@/widgets/admin/eventMng/ui/EventMngListWidget";
import EventMngButtonGroupWidget from "@/widgets/admin/eventMng/ui/EventMngButtonGroupWidget";

const EventMngPage = () => {
  return (
    <Meta>
      <PageContentLayout>
        <EventMngSearchbarWidget />
        <EventMngInfoWidget />
        <EventMngButtonGroupWidget />
        <EventMngListWidget />
      </PageContentLayout>
    </Meta>
  );
};

export default EventMngPage;
