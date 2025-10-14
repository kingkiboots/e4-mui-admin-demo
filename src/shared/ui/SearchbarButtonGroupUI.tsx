import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import EastIcon from "@mui/icons-material/East";
import { type MouseEventHandler } from "react";
import { isNull } from "../lib/commonHelpers";
import { Button } from "./ButtonUI";
import { Searchbar } from "./SearchbarUI";

type SearchbarButtonMouseEventHandler = MouseEventHandler<HTMLButtonElement>;
type SearchbarButtonMouseEventHandlerObj = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
export interface SearchbarButtonGroupProps {
  onClickSearch?:
    | SearchbarButtonMouseEventHandler
    | SearchbarButtonMouseEventHandlerObj;
  onClickNext?:
    | SearchbarButtonMouseEventHandler
    | SearchbarButtonMouseEventHandlerObj;
  onClickClearSearchbar?: SearchbarButtonMouseEventHandler;
  onClickClearAll?:
    | SearchbarButtonMouseEventHandler
    | SearchbarButtonMouseEventHandlerObj;
}
export const SearchbarButtonGroup = ({
  onClickSearch,
  onClickNext,
  onClickClearSearchbar,
  onClickClearAll,
}: SearchbarButtonGroupProps) => {
  return (
    <Searchbar.ButtonsArea>
      {/* 조회 버튼 */}
      {isNull(onClickSearch) ? undefined : (
        <Button
          size="small"
          color="info"
          variant="contained"
          onClick={
            typeof onClickSearch === "object"
              ? onClickSearch.onClick
              : onClickSearch
          }
        >
          <SearchIcon />
          &nbsp;
          {typeof onClickSearch === "object" ? onClickSearch.label : "조회"}
        </Button>
      )}
      {/* 다음 버튼 */}
      {isNull(onClickNext) ? undefined : (
        <Button
          size="small"
          color="dark"
          variant="contained"
          onClick={
            typeof onClickNext === "object" ? onClickNext.onClick : onClickNext
          }
        >
          <EastIcon />
          &nbsp;
          {typeof onClickNext === "object" ? onClickNext.label : "다음"}
        </Button>
      )}
      {/* 검색조건 초기화 버튼 */}
      {isNull(onClickClearSearchbar) ? undefined : (
        <Button
          size="small"
          color="dark"
          variant="contained"
          onClick={onClickClearSearchbar}
        >
          <ClearIcon fontSize="small" />
        </Button>
      )}
      {/* 초기화 버튼 */}
      {isNull(onClickClearAll) ? undefined : (
        <Button
          size="small"
          color="dark"
          variant="contained"
          onClick={
            typeof onClickClearAll === "object"
              ? onClickClearAll.onClick
              : onClickClearAll
          }
        >
          {typeof onClickClearAll === "object"
            ? onClickClearAll.label
            : "초기화"}
        </Button>
      )}
    </Searchbar.ButtonsArea>
  );
};
