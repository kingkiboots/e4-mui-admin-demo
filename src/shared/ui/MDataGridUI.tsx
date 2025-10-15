// eslint-disable-next-line no-restricted-imports -- MUI Button을 Override 하기 위해 사용
import {
  DataGrid as MUIDataGrid,
  type DataGridProps as MUIDataGridProps,
} from "@mui/x-data-grid";

//LINK - https://mui.com/x/api/data-grid/data-grid
export interface MDataGridProps extends MUIDataGridProps {}
export const MDataGrid = ({ ...props }: MDataGridProps) => {
  return (
    <MUIDataGrid
      sx={{
        width: "100%",
        whiteSpace: "nowrap",
        border: `1px solid #e9e9e9`,
        marginBottom: (theme) => theme.spacing(2),
        color: "text.default",
      }}
      {...props}
    />
  );
};
