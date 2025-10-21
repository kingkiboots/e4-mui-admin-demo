import PageContentLayout from "@/widgets/admin/common/ui/PageContentLayout";
import Meta from "./Meta";
import EventMngSearchbarWidget from "@/widgets/admin/eventMng/ui/EventMngSearchbarWidget";
import EventMngInfoWidget from "@/widgets/admin/eventMng/ui/EventMngDetailWidget";
import { EventMngListWidget } from "@/widgets/admin/eventMng/ui/EventMngListWidget";
import { useState } from "react";
import { defaultEventListSearchParams } from "@/features/admin/eventMng/model/getEventListHandler";
import type {
  EventMngDetailData,
  EventMngListSearchData,
} from "@/entities/admin/eventMng/types";
import { useForm } from "react-hook-form";

const EventMngPage = () => {
  //NOTE - 목록 검색 params state
  const [eventListSearchParams, setEventListSearchParams] =
    useState<EventMngListSearchData>(defaultEventListSearchParams);

  //NOTE - 상세정보 UseForm
  const { control, setValue, reset } = useForm<EventMngDetailData>();

  return (
    <Meta>
      <PageContentLayout>
        <EventMngSearchbarWidget
          setEventListSearchParams={setEventListSearchParams}
        />
        <EventMngInfoWidget detailFormControl={control} />
        <EventMngListWidget
          eventListSearchParams={eventListSearchParams}
          detailFormSetValue={setValue}
          resetDetailForm={reset}
        />
      </PageContentLayout>
    </Meta>
  );
};

export default EventMngPage;
