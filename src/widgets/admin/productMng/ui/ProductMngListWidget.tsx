import type {
  ProductMngDetailData,
  ProductMngList,
  ProductMngListSearchData,
} from "@/entities/admin/productMng/types";
import { useGetProductList } from "@/features/admin/productMng/lib/useGetProductList";
import { isNullOrEmpty } from "@/shared/lib/commonHelpers";
import {
  DataGrid,
  type GridColDef,
  type GridRowCallbackParams,
} from "@/shared/ui/DataGridUI";
import { isObject } from "@mui/x-data-grid/internals";
import type { SetStateAction } from "react";
import type { Dispatch } from "react";
import { useCallback } from "react";
import { memo } from "react";
import type { UseFormSetValue } from "react-hook-form";

const columns: GridColDef<ProductMngList>[] = [
  {
    field: "id",
    headerName: "No.",
    align: "center",
    headerAlign: "center",
    filterable: false,
    renderCell: (index) =>
      index.api.getAllRowIds().indexOf(index.row.eventId) + 1,
  },
  {
    field: "eventId",
    headerName: "혜택이벤트식별자",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "mediaId",
    headerName: "매체식별자",
    align: "center",
    headerAlign: "center",
    type: "number",
  },
  {
    field: "giftId",
    headerName: "상품권상품식별자",
  },
  {
    field: "gifttName",
    headerName: "상품명",
  },
  {
    field: "brandId",
    headerName: "브랜드식별자",
  },
  {
    field: "brandName",
    headerName: "브랜드명",
  },
  {
    field: "useYn",
    headerName: "사용여부",
  },
  {
    field: "saleEndDate",
    headerName: "판매종료일자",
  },
  {
    field: "salePrice",
    headerName: "판매금액",
  },
  {
    field: "saleDisAmt",
    headerName: "판매할인금액",
  },
  {
    field: "img250",
    headerName: "상품이미지250",
  },
  {
    field: "img500",
    headerName: "상품이미지500",
  },
  {
    field: "giftTypeCd",
    headerName: "상품유형코드값",
  },
  {
    field: "giftSubTypeCd",
    headerName: "상품상세유형코드",
  },
  {
    field: "subTypeNm",
    headerName: "상품상세유형명",
  },
  {
    field: "regStepDt",
    headerName: "최초등록일시",
  },
  {
    field: "regStepId",
    headerName: "최초등록사용자",
  },
  {
    field: "updStepDt",
    headerName: "최종변경일시",
  },
  {
    field: "updStepId",
    headerName: "최종변경사용자",
  },
];

interface PushMsgMngMsgListWidgetProps {
  productListSearchParams: ProductMngListSearchData;
  setIsUpdatingDetail: Dispatch<SetStateAction<boolean>>;
  detailFormSetValue: UseFormSetValue<ProductMngDetailData>;
}

const ProductMngListWidget = memo<PushMsgMngMsgListWidgetProps>(
  ({ productListSearchParams, setIsUpdatingDetail, detailFormSetValue }) => {
    const { data: rows, isLoading } = useGetProductList(
      productListSearchParams
    );

    const handleRowDoubleClick = useCallback(
      (params: GridRowCallbackParams<ProductMngList[number]>) => {
        if (isNullOrEmpty(params?.row) && !isObject(params?.row)) {
          return;
        }
        const { row } = params;

        setIsUpdatingDetail(true);

        detailFormSetValue("brandId", row.brandId);
        detailFormSetValue("brandName", row.brandName);
        detailFormSetValue("eventId", row.eventId);
        detailFormSetValue("giftId", row.giftId);
        detailFormSetValue("giftSubTypeCd", row.giftSubTypeCd);
        detailFormSetValue("giftTypeCd", row.giftTypeCd);
        detailFormSetValue("gifttName", row.gifttName);
        detailFormSetValue("img250", row.img250);
        detailFormSetValue("img500", row.img500);
        detailFormSetValue("mediaId", row.mediaId);
        detailFormSetValue("regStepDt", row.regStepDt);
        detailFormSetValue("regStepId", row.regStepId);
        detailFormSetValue("saleDisAmt", row.saleDisAmt);
        detailFormSetValue("saleEndDate", row.saleEndDate);
        detailFormSetValue("salePrice", row.salePrice);
        detailFormSetValue("subTypeNm", row.subTypeNm);
        detailFormSetValue("updStepDt", row.updStepDt);
        detailFormSetValue("updStepId", row.updStepId);
        detailFormSetValue("useYn", row.useYn);
      },
      []
    );

    return (
      <DataGrid
        title="상품전시 목록"
        getRowId={(row) => row.eventId}
        columns={columns}
        rows={rows}
        loading={isLoading}
        onRowDoubleClick={handleRowDoubleClick}
        key={`product-mng-list-key`}
        information={
          <>
            조회한 상품 목록 중 <span>전시정보/사용여부</span>를 변경할 수
            있습니다.
          </>
        }
      />
    );
  }
);

export default ProductMngListWidget;
