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
import { useCallback, useRef, type ComponentType } from "react";

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: "id",
    headerName: "",
    width: 90,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "account",
    headerName: "매체식별자",
    flex: 1,
    align: "center",
    headerAlign: "center",
    editable: false,
  },
];

const rows = [
  { id: 1, account: "KBANK001" },
  { id: 2, account: "KBANK002" },
];

export const ProductMngAccountSearchModal: ComponentType<SearchModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const accountRef = useRef<HTMLInputElement>(null);

  const searchButtonsDef: SearchbarButtonGroupProps = {
    onClickSearch: () => {
      if (!accountRef.current) {
        return;
      }

      console.log(accountRef.current.value);
    },
  };

  const handleRowDoubleClick = useCallback(
    (params: GridRowCallbackParams<typeof rows>) => {
      console.log("params", params);
    },
    []
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="매체식별자 검색">
      <Searchbar buttonsDef={searchButtonsDef}>
        <Searchbar.InputsArea>
          <TextField
            inputRef={accountRef}
            label="매체식별자"
            totalColSpan={12}
            labelColSpan={{ xs: 12, sm: 2 }}
            inputColSpan={{ xs: 12, sm: 10 }}
            placeholder="매체식별자 입력"
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
            매체식별자를&nbsp;
            <span>더블 클릭하면</span> 선택이 가능합니다.
          </>
        }
      />
    </Modal>
  );
};
