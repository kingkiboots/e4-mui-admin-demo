import { DataGrid, type GridColDef } from "@/shared/ui/DataGridUI";
import { type GridRowId } from "@mui/x-data-grid";
import type { EventMngData } from "@/entities/admin/eventMng/types";
import { Checkbox } from "@mui/material";
import { memo, useCallback, useMemo, useState, useEffect } from "react";
import { useGetEventList } from "@/features/admin/eventMng/lib/useGetEventList";
import dayjs from "dayjs";
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

const newRow = (index: number): EventMngData => ({
  id: `EVT${String(index).padStart(3, "0")}`,
  name: "",
  code: "",
  difCode: "",
  searchCode: "",
  suName: "",
  suSearchCode: "",
  typeName: "",
  stDt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  edDt: "9999-12-31 23:59:59",
  useYn: "Y",
  setdef: "",
});

export const EventMngListWidget = memo(() => {
  const { data } = useGetEventList();

  const [rows, setRows] = useState<EventMngData[]>([]);
  const [selectionSet, setSelectionSet] = useState<Set<GridRowId>>(new Set());

  // 데이터 로드
  useEffect(() => {
    if (data) setRows(data);
  }, [data]);

  // 파생값
  const allIds = useMemo<GridRowId[]>(
    () => rows.map((r) => r.id as GridRowId),
    [rows]
  );
  const allSelected = useMemo(
    () => allIds.length > 0 && selectionSet.size === allIds.length,
    [allIds.length, selectionSet.size]
  );
  const indeterminate = useMemo(
    () => selectionSet.size > 0 && selectionSet.size < allIds.length,
    [allIds.length, selectionSet.size]
  );

  // 이벤트 핸들러
  const handleSave = useCallback(() => {
    alert("저장되었습니다");
  }, []);

  const handleRemove = useCallback(() => {
    if (selectionSet.size === 0) {
      alert("삭제할 행을 선택하세요.");
      return;
    }
    setRows((prev) => prev.filter((r) => !selectionSet.has(r.id)));
    setSelectionSet(new Set());
  }, [selectionSet]);

  const handleAdd = useCallback(() => {
    const nextNumber = rows.length + 1;
    setRows((prev) => [...prev, newRow(nextNumber)]);
  }, [rows.length]);

  // 선택 컬럼
  const selectCol: GridColDef<EventMngData> = useMemo(
    () => ({
      field: "__select__",
      headerName: "",
      width: 48,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      headerAlign: "center",
      align: "center",
      renderHeader: () => (
        <Checkbox
          size="small"
          checked={allSelected}
          indeterminate={indeterminate}
          onChange={(e) =>
            setSelectionSet(e.target.checked ? new Set(allIds) : new Set())
          }
        />
      ),
      renderCell: (params) => {
        const id = params.id as GridRowId;
        const checked = selectionSet.has(id);
        return (
          <Checkbox
            size="small"
            checked={checked}
            onChange={(e) =>
              setSelectionSet((prev) => {
                const next = new Set(prev);
                if (e.target.checked) next.add(id);
                else next.delete(id);
                return next;
              })
            }
          />
        );
      },
    }),
    [allSelected, indeterminate, allIds, selectionSet]
  );

  // 번호 컬럼 (api 의존 없이 계산)
  const numberCol: GridColDef<EventMngData> = useMemo(
    () => ({
      field: "__no__",
      headerName: "No.",
      width: 72,
      sortable: false,
      filterable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) =>
        allIds.findIndex((x) => x === (params.id as GridRowId)) + 1,
    }),
    [allIds]
  );

  const columns = useMemo<GridColDef<EventMngData>[]>(
    () => [selectCol, numberCol, ...baseDataColumns],
    [selectCol, numberCol]
  );

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
