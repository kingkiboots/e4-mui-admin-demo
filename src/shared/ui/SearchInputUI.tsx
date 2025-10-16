import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import {
  memo,
  useCallback,
  useState,
  type ChangeEventHandler,
  type ComponentPropsWithoutRef,
  type MouseEventHandler,
  type ReactNode,
} from "react";
import { inputEndAdorementStyles } from "../model/commonStyles";
import { type ModalProps } from "./ModalUI";
import { TextField } from "./TextFieldUI";

export interface SearchModalProps extends Omit<ModalProps, "children"> {
  onSelectValue: (obj: { name: string; value: string }) => void;
  children?: ReactNode;
}
interface SearchInputProps
  extends Omit<ComponentPropsWithoutRef<typeof TextField>, "type"> {
  SearchModal: React.ComponentType<SearchModalProps>;
  onClickSearch?: MouseEventHandler<HTMLButtonElement>;
}

const StyledSearchInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    paddingRight: ".6rem",
  },
  ...inputEndAdorementStyles(theme),
}));

export const SearchInput = memo(
  ({
    register,
    SearchModal,
    onClickSearch,
    onChange,
    ...restProps
  }: SearchInputProps) => {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

    const handleSearchClick: MouseEventHandler<HTMLButtonElement> = useCallback(
      (evt) => {
        onClickSearch?.(evt);
        setIsSearchModalOpen(true);
      },
      [onClickSearch, setIsSearchModalOpen]
    );

    const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
      (evt) => {
        onChange?.(evt);
        register?.onChange?.(evt);
      },

      [onChange, register?.onChange]
    );

    const handleSelectValue = useCallback(
      ({ name, value }: { name: string; value: string }) => {
        handleChange({
          target: { name, value },
        } as React.ChangeEvent<HTMLInputElement>);
      },
      [handleChange]
    );

    return (
      <>
        <StyledSearchInput
          onChange={handleChange}
          {...restProps}
          slotProps={{
            input: {
              readOnly: true,
              endAdornment: (
                <InputAdornment position="start" sx={{ marginLeft: "-1px" }}>
                  <IconButton
                    edge="end"
                    size="small"
                    onClick={handleSearchClick}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <SearchModal
          isOpen={isSearchModalOpen}
          setIsOpen={setIsSearchModalOpen}
          onSelectValue={handleSelectValue}
        />
      </>
    );
  }
);

SearchInput.displayName = "SearchInput";
