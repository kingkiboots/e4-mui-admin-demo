import { Button } from "@/shared/ui/ButtonUI";
import { Searchbar } from "@/shared/ui/SearchbarUI";
import { Select, type SelectOption } from "@/shared/ui/SelectUI";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const LimitMngSearchbarWidget = () => {
  const options: SelectOption[] = [
    { value: "1", label: "하나" },
    { value: "2", label: "둘" },
    { value: "3", label: "셋" },
  ];
  return (
    <Searchbar onChange={() => {}}>
      <Searchbar.InputsArea>
        <Select
          label="한도구분"
          options={options}
          defaultValue={"1"}
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
        />
      </Searchbar.InputsArea>
      <Searchbar.ButtonsArea>
        <Button size="small" color="info" variant="contained">
          <SearchIcon />
          &nbsp; 조회
        </Button>
        <Button size="small" color="dark" variant="contained">
          <ClearIcon fontSize="small" />
        </Button>
      </Searchbar.ButtonsArea>
    </Searchbar>
  );
};

export default LimitMngSearchbarWidget;
