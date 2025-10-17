import { ButtonGroupRow } from "@/shared/ui/ButtonGroupRowUI";
import { Button } from "@/shared/ui/ButtonUI";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { memo } from "react";

type Props = {
  onAdd: () => void;
  onSave: () => void;
  onRemove: () => void;
};

const EventMngButtonGroupWidget = memo(({ onAdd,onSave,onRemove }: Props) => {
  return (
    <ButtonGroupRow>
      <Button size="small" color="success" variant="contained" onClick={onAdd}> 
        <AddOutlinedIcon fontSize="small" />
        &nbsp;행추가
      </Button>
      <Button size="small" color="success" variant="contained" onClick={onRemove}>
        <RemoveOutlinedIcon fontSize="small" />
        &nbsp;행삭제
      </Button>
      <Button size="small" color="dark" variant="contained" onClick={onSave}>
        <SaveOutlinedIcon fontSize="small" />
        &nbsp;저장
      </Button>
    </ButtonGroupRow>
  );
});

export default EventMngButtonGroupWidget;
