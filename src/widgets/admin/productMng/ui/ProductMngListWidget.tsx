import type { ProductMngList } from "@/entities/admin/productMng/types";
import { useGetProductList } from "@/features/admin/productMng/lib/useGetProductList";
import { DataGrid, type GridColDef } from "@/shared/ui/DataGridUI";
import { memo } from "react";

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
const ProductMngListWidget = memo(() => {
  const { data: rows } = useGetProductList();

  return (
    <DataGrid
      title="메시지 목록"
      getRowId={(row) => row.eventId}
      columns={columns}
      rows={rows}
      key={`product-mng-list-key`}
      information={
        <>
          조회한 상품 목록 중 <span>전시정보/사용여부</span>를 변경할 수
          있습니다.
        </>
      }
    />
  );
});

export default ProductMngListWidget;
