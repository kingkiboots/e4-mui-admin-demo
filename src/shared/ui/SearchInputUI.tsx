import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEventHandler,
  type ReactNode,
} from "react";
import type { FieldValues } from "react-hook-form";
import { inputEndAdorementStyles } from "../model/commonStyles";
import { withController } from "./ControlledFieldUI";
import { type ModalProps } from "./ModalUI";
import { BaseTextField, type BaseTextFieldProps } from "./TextFieldUI";

type SelectValueCallbackFuntion = (obj: { value: string }) => void;
export interface SearchModalProps extends Omit<ModalProps, "children"> {
  onSelectValue: SelectValueCallbackFuntion;
  children?: ReactNode;
}
interface BaseSearchInputProps extends BaseTextFieldProps {
  SearchModal: React.ComponentType<SearchModalProps>;
  onClickSearch?: MouseEventHandler<HTMLButtonElement>;
}

const StyledSearchInput = styled(BaseTextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    paddingRight: ".6rem",
  },
  ...inputEndAdorementStyles(theme),
}));

function BaseSearchInput({
  name,
  value,
  defaultValue,
  placeholder,
  required,
  error,
  helperText,
  slotProps,
  SearchModal,
  onClickSearch,
  onChange,
  ...restProps
}: BaseSearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  const handleSearchClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (evt) => {
      onClickSearch?.(evt);
      setIsSearchModalOpen(true);
    },
    [onClickSearch, setIsSearchModalOpen]
  );

  const handleChangeInputValue = useCallback((value: string) => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.value = value ?? "";
  }, []);

  const handleSelectValue: SelectValueCallbackFuntion = useCallback(
    ({ value }) => {
      onChange?.({
        target: { name, value },
      } as unknown as React.ChangeEvent<HTMLInputElement>);
      handleChangeInputValue(value);
      setIsSearchModalOpen(false);
    },
    [onChange]
  );

  useLayoutEffect(() => {
    handleChangeInputValue(value as string);
  }, [value]);

  return (
    <>
      <StyledSearchInput
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        required={required}
        error={error}
        helperText={helperText}
        slotProps={{
          input: {
            placeholder: placeholder,
            readOnly: true,
            endAdornment: (
              <InputAdornment position="start" sx={{ marginLeft: "-1px" }}>
                <IconButton edge="end" size="small" onClick={handleSearchClick}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
            ...slotProps?.input,
          },
          ...slotProps,
        }}
        {...restProps}
      />
      <SearchModal
        isOpen={isSearchModalOpen}
        setIsOpen={setIsSearchModalOpen}
        onSelectValue={handleSelectValue}
      />
    </>
  );
}

const SearchInput = withController<FieldValues, BaseSearchInputProps>(
  BaseSearchInput
);

export { SearchInput };
