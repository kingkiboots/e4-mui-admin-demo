import PageContentLayout from "@/widgets/admin/common/ui/PageContentLayout";
import Meta from "./Meta";
import type {
  PushMsgDetailData,
  PushMsgListSearchParams,
} from "@/entities/admin/pushMsgMng/types";
import { useForm } from "react-hook-form";

import PushMsgMngSearchbarWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngSearchbarWidget";
import PushMsgMngMsgListWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngMsgListWidget";
import PushMsgMngMsgDetailWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngMsgDetailWidget";
import PushMsgMngMsgDetailMngWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngMsgDetailMngWidget";
import { useState } from "react";
import { defaultPushMsgListSearchParams } from "@/features/admin/pushMsgMng/model/getPushMsgListHandler";

const PushMsgMngPage = () => {
  //NOTE - 상세정보 UseForm
  const { control, setValue, handleSubmit, reset } =
    useForm<PushMsgDetailData>();

  //NOTE - 목록 검색 params state
  const [pushMsgListSearchParams, setPushMsgListSearchParams] =
    useState<PushMsgListSearchParams>(defaultPushMsgListSearchParams);

  //NOTE - state that indicates whether row in the list is double clicked (han-geul not working T.T)
  const [isUpdatingDetail, setIsUpdatingDetail] = useState<boolean>(false);

  return (
    <Meta>
      <PageContentLayout>
        <PushMsgMngSearchbarWidget
          setPushMsgListSearchParams={setPushMsgListSearchParams}
        />
        <PushMsgMngMsgDetailWidget
          isUpdatingDetail={isUpdatingDetail}
          detailFormControl={control}
        />
        <PushMsgMngMsgDetailMngWidget
          isUpdatingDetail={isUpdatingDetail}
          setIsUpdatingDetail={setIsUpdatingDetail}
          resetDetailForm={reset}
          handleSubmitDetailForm={handleSubmit}
        />
        <PushMsgMngMsgListWidget
          pushMsgListSearchParams={pushMsgListSearchParams}
          setIsUpdatingDetail={setIsUpdatingDetail}
          detailFormSetValue={setValue}
        />
      </PageContentLayout>
    </Meta>
  );
};

export default PushMsgMngPage;
