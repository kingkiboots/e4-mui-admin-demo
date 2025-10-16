import type { EventMngList } from "@/entities/admin/eventMng/types";
import { useGetEventList } from "@/features/admin/eventMng/lib/useGetEventList";
import { DataGrid, type GridColDef } from "@/shared/ui/DataGridUI";

const columns: GridColDef<EventMngList>[] = [
  {
    field: "no",
    headerName: "No.",
    align: "center",
    headerAlign: "center",
    filterable: false,
    renderCell: (index) =>
      index.api.getAllRowIds().indexOf(index.row.id) + 1,
  },
  {
    field: "id",
    headerName: "혜택기본식별자",
    headerAlign: "center",
    align: "center",
    type: "number",
  },
  {
    field: "name",
    headerName: "혜택명",
    headerAlign: "center",
    align: "center",    
  },
  {
    field: "code",
    headerName: "혜택유형코드",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "difCode",
    headerName: "혜태유형식별자",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "searchCode",
    headerName: "혜택휴형검색",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "suName",
    headerName: "수혜자조건명",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "suSearchCode",
    headerName: "수혜자조건검색",
    headerAlign: "center",
    align: "center",
  },

  {
    field: "typeName",
    headerName: "지급조건명",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "stDt",
    headerName: "지급시작일시",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "edDt",
    headerName: "지급종료일시",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "useYn",
    headerName: "지급사용여부",
    headerAlign: "center",
    align: "center",
  },
   {
    field: "setdef",
    headerName: "혜택설정기준",
    headerAlign: "center",
    align: "center",
  },
];

export const EventMngListWidget = () => {
  const { data: rows } = useGetEventList();

  return (
    <DataGrid
      title="혜택 목록"
      getRowId={(row) => row.id}
      columns={columns}
      rows={rows}
    />
  );
};

EventMngListWidget.displayName = "EventMngListWidget";
export default EventMngListWidget;