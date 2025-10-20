import {
  DataGrid,
  type GridColDef,
  type GridRowCallbackParams,
} from "@/shared/ui/DataGridUI";
import { Modal } from "@/shared/ui/ModalUI";
import type { SearchbarButtonGroupProps } from "@/shared/ui/SearchbarButtonGroupUI";
import { Searchbar } from "@/shared/ui/SearchbarUI";
import type { SearchModalProps } from "@/shared/ui/SearchInputUI";
import { TextField } from "@/shared/ui/TextFieldUI";
import { memo, useCallback, type ComponentType } from "react";
import { useForm } from "react-hook-form";

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: "id",
    headerName: "",
    width: 90,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "evt",
    headerName: "이벤트식별자",
    flex: 1,
    align: "center",
    headerAlign: "center",
    editable: false,
  },
];

const rows = [
  { id: 1, evt: "EVT20251014A01" },
  { id: 2, evt: "EVT20251014A02" },
];

const ProductMngEventSearchModal: ComponentType<SearchModalProps> = memo(
  ({ isOpen, setIsOpen, onSelectValue }) => {
    const { control, getValues } = useForm<{ evt: string }>();

    const searchButtonsDef: SearchbarButtonGroupProps = {
      onClickSearch: () => {
        console.log(getValues("evt"));
      },
    };

    const handleRowDoubleClick = useCallback(
      (params: GridRowCallbackParams<(typeof rows)[number]>) => {
        console.log("params", params.columns);
        console.log("params", params.id);
        console.log("params", params.row);

        onSelectValue({ value: params.row.evt });
      },
      []
    );

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="매체식별자 검색">
        <Searchbar buttonsDef={searchButtonsDef}>
          <Searchbar.InputsArea>
            <TextField
              name="evt"
              label="이벤트식별자"
              control={control}
              totalColSpan={12}
              labelColSpan={{ xs: 12, sm: 2 }}
              inputColSpan={{ xs: 12, sm: 10 }}
              placeholder="이벤트식별자 입력"
              required
            />
          </Searchbar.InputsArea>
        </Searchbar>
        <DataGrid
          rows={rows}
          columns={columns}
          onRowDoubleClick={handleRowDoubleClick}
          disableRowSelectionOnClick
          information={
            <>
              이벤트식별자를&nbsp;
              <span>더블 클릭하면</span> 선택이 가능합니다.
            </>
          }
        />
      </Modal>
    );
  }
);

ProductMngEventSearchModal.displayName = "ProductMngAccountSearchModal";
export default ProductMngEventSearchModal;
