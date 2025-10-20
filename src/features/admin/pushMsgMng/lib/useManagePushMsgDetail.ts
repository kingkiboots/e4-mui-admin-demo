import {
  useAddPushMsgDetailMutation,
  useDeletePushMsgMutation,
  useUpdatePushMsgDetailMutation,
} from "@/entities/admin/pushMsgMng/lib/usePushMsgMngApiQueries";
import type { PushMsgDetailData } from "@/entities/admin/pushMsgMng/types";
import type { Dispatch, SetStateAction } from "react";
import { useCallback } from "react";
import type { UseFormReset } from "react-hook-form";

export const useManagePushMsgDetail = ({
  reset,
  setIsUpdatingDetail,
}: {
  reset: UseFormReset<PushMsgDetailData>;
  setIsUpdatingDetail: Dispatch<SetStateAction<boolean>>;
}) => {
  const { mutate: addPushMsgDetail } = useAddPushMsgDetailMutation();
  const { mutate: updatePushMsgDetail } = useUpdatePushMsgDetailMutation();
  const { mutate: deletePushMsg } = useDeletePushMsgMutation();

  const resetPushMsgDetailForm = useCallback(() => {
    reset();
    setIsUpdatingDetail(false);
  }, []);

  const handleAddPushMsgDetail = useCallback(
    (data: PushMsgDetailData) => {
      addPushMsgDetail(data, {
        onSuccess: (res) => {
          const data = res.data.data;
          if (data === true) {
            alert("정상적으로 저장되었습니다.");
            resetPushMsgDetailForm();
            return;
          }
          alert("오류 발생");
        },
      });
    },
    [addPushMsgDetail, resetPushMsgDetailForm]
  );

  const handleUpdatePushMsgDetail = useCallback(
    (data: PushMsgDetailData) => {
      updatePushMsgDetail(data, {
        onSuccess: (res) => {
          const data = res.data.data;
          if (data === true) {
            alert("정상적으로 수정되었습니다.");
            resetPushMsgDetailForm();
            return;
          }
          alert("오류 발생");
        },
      });
    },
    [updatePushMsgDetail, resetPushMsgDetailForm]
  );
  const handleDeletePushMsgDetail = useCallback(
    (serviceCd: Required<PushMsgDetailData>["serviceCd"]) => {
      deletePushMsg(
        { serviceCd: serviceCd },
        {
          onSuccess: (res) => {
            const data = res.data.data;
            if (data === true) {
              alert("정상적으로 저장되었습니다.");
              resetPushMsgDetailForm();
              return;
            }
            alert("오류 발생");
          },
        }
      );
    },
    [updatePushMsgDetail, resetPushMsgDetailForm]
  );

  return {
    resetPushMsgDetailForm,
    handleAddPushMsgDetail,
    handleUpdatePushMsgDetail,
    handleDeletePushMsgDetail,
  };
};
