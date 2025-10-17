import type {
  EventMngData,
  EventMngList,
} from "@/entities/admin/eventMng/types";
import type { GridColDef } from "@/shared/ui/DataGridUI";
import Checkbox from "@mui/material/Checkbox";
import type { GridRowId } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useCallback, useEffect, useMemo, useState } from "react";

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

export const useAddRemoveRows = (
  baseDataColumns: GridColDef<EventMngData>[],
  data?: EventMngList
) => {
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

  return {
    rows,
    columns,
    handleAdd,
    handleRemove,
  };
};
