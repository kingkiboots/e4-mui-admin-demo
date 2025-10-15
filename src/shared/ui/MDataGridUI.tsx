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
  whiteSpace: "nowrap",
  border: `1px solid #e9e9e9`,
  marginBottom: theme.spacing(2),
  color: theme.palette.text.default,

  "& .MuiDataGrid-columnHeader": {
    textAlign: "center",
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

  return <StyledDataGrid apiRef={apiRef} {...props} />;
};
