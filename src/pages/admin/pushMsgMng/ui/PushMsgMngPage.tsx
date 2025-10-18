import PageContentLayout from "@/widgets/admin/common/ui/PageContentLayout";
import Meta from "./Meta";
import type { PushMsgDetailData } from "@/entities/admin/pushMsgMng/types";
import { useForm } from "react-hook-form";

import PushMsgMngSearchbarWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngSearchbarWidget";
import PushMsgMngMsgListWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngMsgListWidget";
import PushMsgMngMsgDetailWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngMsgDetailWidget";
import PushMsgMngMsgDetailMngWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngMsgDetailMngWidget";
import { useState } from "react";

const PushMsgMngPage = () => {
  const { control, setValue, handleSubmit, reset } =
    useForm<PushMsgDetailData>();

  const [isUpdatingDetail, setIsUpdatingDetail] = useState<boolean>(false);

  return (
    <Meta>
      <PageContentLayout>
        <PushMsgMngSearchbarWidget />
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
          setIsUpdatingDetail={setIsUpdatingDetail}
          detailFormSetValue={setValue}
        />
      </PageContentLayout>
    </Meta>
  );
};

export default PushMsgMngPage;
