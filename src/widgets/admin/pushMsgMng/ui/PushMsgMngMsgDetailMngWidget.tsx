import {
  useAddPushMsgDetailMutation,
  useDeletePushMsgMutation,
  useUpdatePushMsgDetailMutation,
} from "@/entities/admin/pushMsgMng/lib/usePushMsgMngApiQueries";
import type { PushMsgDetailData } from "@/entities/admin/pushMsgMng/types";
import { isNullOrEmpty } from "@/shared/lib/commonHelpers";
import { checkIfDataIsNullOrEmpty } from "@/shared/lib/validationHelpers";
import { ButtonGroupRow } from "@/shared/ui/ButtonGroupRowUI";
import { Button } from "@/shared/ui/ButtonUI";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import type { Dispatch, SetStateAction } from "react";
import { memo, useCallback } from "react";
import type { UseFormHandleSubmit, UseFormReset } from "react-hook-form";

interface PushMsgMngMsgDetailMngWidgetProps {
  isUpdatingDetail: boolean;
  setIsUpdatingDetail: Dispatch<SetStateAction<boolean>>;
  resetDetailForm: UseFormReset<PushMsgDetailData>;
  handleSubmitDetailForm: UseFormHandleSubmit<PushMsgDetailData>;
}

const PushMsgMngMsgDetailMngWidget = memo<PushMsgMngMsgDetailMngWidgetProps>(
  ({
    isUpdatingDetail,
    setIsUpdatingDetail,
    resetDetailForm: reset,
    handleSubmitDetailForm: handleSubmit,
  }) => {
    const { mutate: addPushMsgDetail } = useAddPushMsgDetailMutation();
    const { mutate: updatePushMsgDetail } = useUpdatePushMsgDetailMutation();
    const { mutate: deletePushMsg } = useDeletePushMsgMutation();

    const handleResetClick = useCallback(() => {
      reset();
      setIsUpdatingDetail(false);
    }, [reset, setIsUpdatingDetail]);

    const handleUpdateClick = useCallback(() => {
      handleSubmit((data) => {
        if (checkIfDataIsNullOrEmpty(data.serviceCd, data.seq)) {
          alert("데이터를 입력하세요");
          return;
        }

        console.log("수정할 데이터:", data);

        updatePushMsgDetail(data, {
          onSuccess: (res) => {
            const data = res.data.data;
            if (data === true) {
              alert("정상적으로 수정되었습니다.");
              handleResetClick();
              return;
            }
            alert("오류 발생");
          },
        });
      })();
    }, [handleSubmit, handleResetClick]);

    const handleDeleteClick = useCallback(() => {
      handleSubmit((data) => {
        if (checkIfDataIsNullOrEmpty(data.serviceCd, data.seq)) {
          alert("데이터를 입력하세요");
          return;
        }

        console.log("삭제할 데이터의 key:", data.serviceCd);

        if (isNullOrEmpty(data.serviceCd)) {
          return;
        }

        deletePushMsg(
          { serviceCd: data.serviceCd },
          {
            onSuccess: (res) => {
              const data = res.data.data;
              if (data === true) {
                alert("정상적으로 저장되었습니다.");
                handleResetClick();
                return;
              }
              alert("오류 발생");
            },
          }
        );
      })();
    }, [handleSubmit, handleResetClick]);

    const handleAddClick = useCallback(() => {
      handleSubmit((data) => {
        if (checkIfDataIsNullOrEmpty(data.serviceCd, data.seq)) {
          alert("데이터를 입력하세요");
          return;
        }

        console.log("추가할 데이터:", data);
        addPushMsgDetail(data, {
          onSuccess: (res) => {
            const data = res.data.data;
            if (data === true) {
              alert("정상적으로 저장되었습니다.");
              handleResetClick();
              return;
            }
            alert("오류 발생");
          },
        });
      })();
    }, [handleSubmit, handleResetClick]);

    return (
      <ButtonGroupRow>
        <Button
          size="small"
          color="success"
          variant="contained"
          onClick={handleResetClick}
        >
          <ClearOutlinedIcon fontSize="small" />
          &nbsp;상세정보 초기화
        </Button>
        <Button
          size="small"
          color="success"
          variant="contained"
          onClick={handleUpdateClick}
          disabled={!isUpdatingDetail}
        >
          <AutoFixHighOutlinedIcon fontSize="small" />
          &nbsp;메시지 수정
        </Button>
        <Button
          size="small"
          color="success"
          variant="contained"
          onClick={handleDeleteClick}
          disabled={!isUpdatingDetail}
        >
          <DeleteOutlineOutlinedIcon fontSize="small" />
          &nbsp;메시지 삭제
        </Button>
        <Button
          size="small"
          color="dark"
          variant="contained"
          onClick={handleAddClick}
          disabled={isUpdatingDetail}
        >
          <AddOutlinedIcon fontSize="small" />
          &nbsp;메시지 등록
        </Button>
      </ButtonGroupRow>
    );
  }
);

PushMsgMngMsgDetailMngWidget.displayName = "PushMsgMngMsgDetailMngWidget";
export default PushMsgMngMsgDetailMngWidget;
