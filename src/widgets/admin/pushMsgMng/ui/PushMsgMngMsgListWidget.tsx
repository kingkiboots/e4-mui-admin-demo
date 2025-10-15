import type { PushMsgMngList } from "@/entities/admin/pushMsgMng/types";
import { useGetPushMsgList } from "@/features/admin/pushMsgMng/lib/useGetPushMsgList";
import { DataGrid, type GridColDef } from "@/shared/ui/DataGridUI";
import { memo } from "react";

const columns: GridColDef<PushMsgMngList>[] = [
  {
    field: "id",
    headerName: "No.",
    align: "center",
    headerAlign: "center",
    filterable: false,
    renderCell: (index) =>
      index.api.getAllRowIds().indexOf(index.row.serviceCd) + 1,
  },
  {
    field: "serviceCd",
    headerName: "UMS서비스코드",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "seq",
    headerName: "푸쉬일련번호",
    align: "center",
    headerAlign: "center",
    type: "number",
  },
  {
    field: "name",
    headerName: "푸쉬제목",
  },
  {
    field: "content",
    headerName: "푸쉬제목",
  },
  {
    field: "url",
    headerName: "푸쉬내용",
  },
  {
    field: "useYn",
    headerName: "사용여부",
    align: "center",
    headerAlign: "center",
  },
];

const PushMsgMngMsgListWidget = memo(() => {
  const { data: rows } = useGetPushMsgList();

  return (
    <DataGrid
      title="메시지 목록"
      getRowId={(row) => row.serviceCd}
      columns={columns}
      rows={rows}
    />
  );
});

PushMsgMngMsgListWidget.displayName = "PushMsgMngMsgListWidget";
export default PushMsgMngMsgListWidget;
