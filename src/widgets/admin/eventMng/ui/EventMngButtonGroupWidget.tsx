import { ButtonGroupRow } from "@/shared/ui/ButtonGroupRowUI";
import { Button } from "@/shared/ui/ButtonUI";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { memo } from "react";

const EventMngButtonGroupWidget = memo(() => {
  return (
    <ButtonGroupRow>
      <Button size="small" color="success" variant="contained">
        <AddOutlinedIcon fontSize="small" />
        &nbsp;행추가
      </Button>
      <Button size="small" color="success" variant="contained">
        <DeleteOutlineIcon fontSize="small" />
        &nbsp;행삭제
      </Button>
      <Button size="small" color="dark" variant="contained">
        <SaveOutlinedIcon fontSize="small" />
        &nbsp;저장
      </Button>
    </ButtonGroupRow>
  );
});

export default EventMngButtonGroupWidget;
