import { ButtonGroupRow } from "@/shared/ui/ButtonGroupRowUI";
import { Button } from "@/shared/ui/ButtonUI";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { memo } from "react";

type ProductMngButtonGroupWidgetProps = {
  setAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductMngButtonGroupWidget = memo(
  ({ setAlert }: ProductMngButtonGroupWidgetProps) => {
    return (
      <ButtonGroupRow>
        <Button size="small" color="success" variant="contained">
          <AddOutlinedIcon fontSize="small" />
          &nbsp;상품전시 목록 생성
        </Button>
        <Button size="small" color="success" variant="contained">
          <SearchOutlinedIcon fontSize="small" />
          &nbsp;상품전시 목록조회
        </Button>
        <Button
          onClick={() => setAlert(true)}
          size="small"
          color="dark"
          variant="contained"
        >
          <SaveOutlinedIcon fontSize="small" />
          &nbsp;저장
        </Button>
      </ButtonGroupRow>
    );
  }
);

export default ProductMngButtonGroupWidget;
