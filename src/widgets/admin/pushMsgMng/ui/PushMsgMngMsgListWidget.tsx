import type {
  PushMsgMngDetailData,
  PushMsgMngList,
} from "@/entities/admin/pushMsgMng/types";
import { useGetPushMsgList } from "@/features/admin/pushMsgMng/lib/useGetPushMsgList";
import { isNullOrEmpty, isObject } from "@/shared/lib/commonHelpers";
import {
  DataGrid,
  type GridColDef,
  type GridRowCallbackParams,
} from "@/shared/ui/DataGridUI";
import type { SetStateAction } from "react";
import type { Dispatch } from "react";
import { memo, useCallback } from "react";
import type { UseFormSetValue } from "react-hook-form";

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

interface PushMsgMngMsgListWidgetProps {
  setIsUpdatingDetail: Dispatch<SetStateAction<boolean>>;
  detailFormSetValue: UseFormSetValue<PushMsgMngDetailData>;
}
const PushMsgMngMsgListWidget = memo<PushMsgMngMsgListWidgetProps>(
  ({ setIsUpdatingDetail, detailFormSetValue }) => {
    const { data: rows } = useGetPushMsgList();

    const handleRowDoubleClick = useCallback(
      (params: GridRowCallbackParams<PushMsgMngList[number]>) => {
        if (isNullOrEmpty(params?.row) && !isObject(params?.row)) {
          return;
        }
        const { row } = params;

        setIsUpdatingDetail(true);

        detailFormSetValue("serviceCd", row.serviceCd);
        detailFormSetValue("seq", row.seq);
        detailFormSetValue("name", row.name);
        detailFormSetValue("content", row.content);
        detailFormSetValue("url", row.url);
        detailFormSetValue("useYn", row.useYn);
      },
      []
    );

    return (
      <DataGrid
        title="메시지 목록"
        getRowId={(row) => row.serviceCd}
        columns={columns}
        rows={rows}
        onRowDoubleClick={handleRowDoubleClick}
        disableRowSelectionOnClick
        information={
          <>
            혜택기본식별자를 <span>더블 클릭하면</span> 상세 정보 조회가
            가능합니다.
          </>
        }
      />
    );
  }
);

PushMsgMngMsgListWidget.displayName = "PushMsgMngMsgListWidget";
export default PushMsgMngMsgListWidget;
