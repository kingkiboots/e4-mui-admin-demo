import PageContentLayout from "@/widgets/admin/common/ui/PageContentLayout";
import Meta from "./Meta";
import EventMngSearchbarWidget from "@/widgets/admin/eventMng/ui/EventMngSearchbarWidget";
import EventMngInfoWidget from "@/widgets/admin/eventMng/ui/EventMngDetailWidget";
import { EventMngListWidget } from "@/widgets/admin/eventMng/ui/EventMngListWidget";
import { useState } from "react";
import { defaultEventListSearchParams } from "@/features/admin/eventMng/model/getEventListHandler";
import type { EventMngListSearchData } from "@/entities/admin/eventMng/types";

const EventMngPage = () => {
  //NOTE - 목록 검색 params state
  const [eventListSearchParams, setEventListSearchParams] =
    useState<EventMngListSearchData>(defaultEventListSearchParams);

  return (
    <Meta>
      <PageContentLayout>
        <EventMngSearchbarWidget
          setEventListSearchParams={setEventListSearchParams}
        />
        <EventMngInfoWidget />
        <EventMngListWidget eventListSearchParams={eventListSearchParams} />
      </PageContentLayout>
    </Meta>
  );
};

export default EventMngPage;
