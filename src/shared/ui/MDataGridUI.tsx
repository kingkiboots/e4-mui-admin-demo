import { styled } from "@mui/material/styles";
// eslint-disable-next-line no-restricted-imports -- MUI Button을 Override 하기 위해 사용
import {
  DataGrid as MUIDataGrid,
  useGridApiRef,
  type DataGridProps as MUIDataGridProps,
} from "@mui/x-data-grid";
import { useEffect } from "react";
import { isNull } from "../lib/commonHelpers";

//LINK - https://mui.com/x/api/data-grid/data-grid
const StyledDataGrid = styled(MUIDataGrid, {
  name: "MUIDataGrid",
  label: "table",
})(({ theme }) => ({
  width: "100%",
  fontSize: "1.3rem",
  whiteSpace: "nowrap",
  border: `1px solid #e9e9e9`,
  color: theme.palette.text.default,

  "& .MuiDataGrid-cell": {
    flex: "1",
    padding: "2px 12px",
    display: "flex",
    alignItems: "center",
  },

  "& .MuiDataGrid-cell:last-child": {
    flex: "0",
    display: "none",
  },

  "& .MuiDataGrid-columnHeaders .MuiDataGrid-filler": {
    flex: "0 !important",
    display: "none",
  },

  "& .MuiDataGrid-columnHeaders": {
    borderBottom: "2px solid #0114a7 !important",
  },

  "& .MuiDataGrid-row:nth-of-type(odd)": {
    backgroundColor: theme.palette.background.cell,
  },

  "& .MuiDataGrid-columnHeaderTitleContainer": {
    justifyContent: "center",
    padding: "2px 12px",
  },

  "& .MuiDataGrid-columnHeader": {
    textAlign: "center",
    flex: "1",
    "& .MuiDataGrid-columnHeaderTitle": {
      textAlign: "center",
      width: "100%",
    },
  },
}));

export interface MDataGridProps extends MUIDataGridProps {}
export const MDataGrid = ({ autosizeOptions, ...props }: MDataGridProps) => {
  const apiRef = useGridApiRef();

  useEffect(() => {
    if (isNull(apiRef.current)) {
      return;
    }
    const timer = setTimeout(() => {
      apiRef.current?.autosizeColumns({
        includeHeaders: true,
        includeOutliers: false,
        ...autosizeOptions,
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [autosizeOptions]);

  return (
    <StyledDataGrid
      apiRef={apiRef}
      columnHeaderHeight={32}
      rowHeight={32}
      showCellVerticalBorder
      {...props}
    />
  );
};
