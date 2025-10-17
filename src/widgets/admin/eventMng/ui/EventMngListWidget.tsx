import type { EventMngData } from "@/entities/admin/eventMng/types";
import { useAddRemoveRows } from "@/features/admin/eventMng/lib/useAddRemoveRows";
import { useGetEventList } from "@/features/admin/eventMng/lib/useGetEventList";
import { DataGrid, type GridColDef } from "@/shared/ui/DataGridUI";
import { memo, useCallback } from "react";
import EventMngButtonGroupWidget from "./EventMngButtonGroupWidget";

const baseDataColumns: GridColDef<EventMngData>[] = [
  {
    field: "id",
    headerName: "혜택기본식별자",
    headerAlign: "center",
    align: "center",
    editable: true,
  },
  {
    field: "name",
    headerName: "혜택명",
    headerAlign: "center",
    align: "center",
    editable: true,
  },
  {
    field: "code",
    headerName: "혜택유형코드",
    headerAlign: "center",
    align: "center",
    editable: true,
  },
  {
    field: "difCode",
    headerName: "혜태유형식별자",
    headerAlign: "center",
    align: "center",
    editable: true,
  },
  {
    field: "searchCode",
    headerName: "혜택휴형검색",
    headerAlign: "center",
    align: "center",
    editable: true,
  },
  {
    field: "suName",
    headerName: "수혜자조건명",
    headerAlign: "center",
    align: "center",
    editable: true,
  },
  {
    field: "suSearchCode",
    headerName: "수혜자조건검색",
    headerAlign: "center",
    align: "center",
    editable: true,
  },
  {
    field: "typeName",
    headerName: "지급조건명",
    headerAlign: "center",
    align: "center",
    editable: true,
    minWidth: 200,
  },
  {
    field: "stDt",
    headerName: "지급시작일시",
    headerAlign: "center",
    align: "center",
    editable: true,
    minWidth: 220,
  },
  {
    field: "edDt",
    headerName: "지급종료일시",
    headerAlign: "center",
    align: "center",
    editable: true,
    minWidth: 220,
  },
  {
    field: "useYn",
    headerName: "지급사용여부",
    headerAlign: "center",
    align: "center",
    editable: true,
    width: 120,
  },
  {
    field: "setdef",
    headerName: "혜택설정기준",
    headerAlign: "center",
    align: "center",
    editable: true,
    minWidth: 160,
  },
];

export const EventMngListWidget = memo(() => {
  const { data } = useGetEventList();

  const { rows, columns, handleAdd, handleRemove } = useAddRemoveRows(
    baseDataColumns,
    data
  );

  // 이벤트 핸들러
  const handleSave = useCallback(() => {
    alert("저장되었습니다");
  }, []);

  return (
    <>
      <EventMngButtonGroupWidget
        onAdd={handleAdd}
        onSave={handleSave}
        onRemove={handleRemove}
      />
      <DataGrid
        title="혜택 목록"
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
      />
    </>
  );
});

EventMngListWidget.displayName = "EventMngListWidget";
export default EventMngListWidget;
