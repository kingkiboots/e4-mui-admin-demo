import type { EventMngList } from "@/entities/admin/eventMng/types";
import { useGetEventList } from "@/features/admin/eventMng/lib/useGetEventList";
import { DataGrid, type GridColDef } from "@/shared/ui/DataGridUI";

const columns: GridColDef<EventMngList>[] = [
  {
    field: "id",
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
    align: "center",
    headerAlign: "center",
    type: "number",
  },
  {
    field: "name",
    headerName: "혜택명",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "code",
    headerName: "혜택유형코드",
  },
  {
    field: "difCode",
    headerName: "혜태유형식별자",
  },
  {
    field: "searchCode",
    headerName: "혜택휴형검색",
  },
  {
    field: "suName",
    headerName: "수혜자조건명",
    headerAlign: "center",
  },
  {
    field: "suSearchCode",
    headerName: "수혜자조건검색",
    headerAlign: "center",
  },

  {
    field: "typeName",
    headerName: "지급조건명",
    headerAlign: "center",
  },
  {
    field: "stDt",
    headerName: "지급시작일시",
    headerAlign: "center",
  },
  {
    field: "edDt",
    headerName: "지급종료일시",
    headerAlign: "center",
  },
  {
    field: "useYn",
    headerName: "지급사용여부",
    headerAlign: "center",
  },
   {
    field: "setdef",
    headerName: "혜택설정기준",
    headerAlign: "center",
  },
];

export const EventMngListWidget = () => {
  const { data: rows } = useGetEventList();

  return (
    <DataGrid
      title="메시지 목록"
      getRowId={(row) => row.id}
      columns={columns}
      rows={rows}
    />
  );
};
