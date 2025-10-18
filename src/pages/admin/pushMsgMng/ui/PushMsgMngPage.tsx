import PageContentLayout from "@/widgets/admin/common/ui/PageContentLayout";
import Meta from "./Meta";
import type { PushMsgMngDetailData } from "@/entities/admin/pushMsgMng/types";
import { useForm } from "react-hook-form";

import PushMsgMngSearchbarWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngSearchbarWidget";
import PushMsgMngMsgListWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngMsgListWidget";
import PushMsgMngMsgDetailWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngMsgDetailWidget";
import PushMsgMngMsgDetailMngWidget from "@/widgets/admin/pushMsgMng/ui/PushMsgMngMsgDetailMngWidget";

const PushMsgMngPage = () => {
  const { control, setValue } = useForm<PushMsgMngDetailData>();

  return (
    <Meta>
      <PageContentLayout>
        <PushMsgMngSearchbarWidget />
        <PushMsgMngMsgDetailWidget detailFormControl={control} />
        <PushMsgMngMsgDetailMngWidget />
        <PushMsgMngMsgListWidget detailFormSetValue={setValue} />
      </PageContentLayout>
    </Meta>
  );
};

export default PushMsgMngPage;
