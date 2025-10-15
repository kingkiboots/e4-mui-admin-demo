import { ButtonGroupRow } from "@/shared/ui/ButtonGroupRowUI";
import { Button } from "@/shared/ui/ButtonUI";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { memo } from "react";

const PushMsgMngMsgDetailMngWidget = memo(() => {
  return (
    <ButtonGroupRow>
      <Button size="small" color="success" variant="contained">
        <ClearOutlinedIcon fontSize="small" />
        &nbsp;상세정보 초기화
      </Button>
      <Button size="small" color="success" variant="contained">
        <AutoFixHighOutlinedIcon fontSize="small" />
        &nbsp;메시지 수정
      </Button>
      <Button size="small" color="success" variant="contained">
        <DeleteOutlineOutlinedIcon fontSize="small" />
        &nbsp;메시지 삭제
      </Button>
      <Button size="small" color="dark" variant="contained">
        <AddOutlinedIcon fontSize="small" />
        &nbsp;메시지 등록
      </Button>
    </ButtonGroupRow>
  );
});

PushMsgMngMsgDetailMngWidget.displayName = "PushMsgMngMsgDetailMngWidget";
export default PushMsgMngMsgDetailMngWidget;
