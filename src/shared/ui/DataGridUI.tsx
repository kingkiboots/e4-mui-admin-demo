import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// eslint-disable-next-line no-restricted-imports -- MUI Button을 Override 하기 위해 사용
import type {
  GridRowParams,
  GridValidRowModel,
  GridColDef as MUIGridColDef,
} from "@mui/x-data-grid";
import React, { memo, Suspense } from "react";
import { Col } from "./ColUI";
import type { MDataGridProps } from "./MDataGridUI";
import { Panel, type PropsWithPanelProps } from "./PanelUI";
import { Row } from "./RowUI";

const MDataGrid = React.lazy(() =>
  import("./MDataGridUI").then((module) => ({ default: module.MDataGrid }))
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GridColDef<R extends GridValidRowModel = any> = MUIGridColDef<
  R[number]
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GridRowCallbackParams<R extends GridValidRowModel = any> =
  GridRowParams<R>;
export interface DataGridProps extends PropsWithPanelProps, MDataGridProps {
  isPending?: boolean;
}
export const DataGrid = ({
  title,
  information,
  ...dataGridProps
}: DataGridProps) => {
  return (
    <Panel
      title={<GridTitle title={title} rowCount={dataGridProps.rows?.length} />}
      information={information}
    >
      <Row>
        <Col
          size={12}
          sx={{
            overflowX: "auto",
          }}
        >
          <Suspense>
            <MDataGrid {...dataGridProps} />
          </Suspense>
        </Col>
      </Row>
    </Panel>
  );
};

interface GridTitle extends Pick<PropsWithPanelProps, "title"> {
  rowCount?: number;
}

const GridTitle = memo<GridTitle>(({ title, rowCount = 0 }) => {
  return (
    <>
      {title}
      <Typography
        variant="caption"
        component="small"
        sx={{
          marginLeft: "20px",
          opacity: 0.8,
          fontWeight: 400,
          fontSize: "1.2rem",
        }}
      >
        <Box component="i">
          총{" "}
          <Box component="strong" sx={{ color: "info.main" }}>
            {rowCount}건
          </Box>
          이 검색되었습니다.
        </Box>
      </Typography>
    </>
  );
});

GridTitle.displayName = "GridTitle";
