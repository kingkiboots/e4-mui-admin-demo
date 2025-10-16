import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import {
  memo,
  useCallback,
  type ChangeEventHandler,
  type ComponentPropsWithoutRef,
} from "react";
import { TextField } from "./TextFieldUI";
import { styled } from "@mui/material/styles";
import { inputEndAdorementStyles } from "../model/commonStyles";

interface SearchInputProps
  extends Omit<ComponentPropsWithoutRef<typeof TextField>, "type"> {}

const StyledSearchInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    paddingRight: ".6rem",
  },
  ...inputEndAdorementStyles(theme),
}));

export const SearchInput = memo(
  ({ register, onChange, ...restProps }: SearchInputProps) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
      (evt) => {
        onChange?.(evt);
        register?.onChange?.(evt);
      },

      [onChange, register?.onChange]
    );

    return (
      <StyledSearchInput
        onChange={handleChange}
        {...restProps}
        slotProps={{
          input: {
            readOnly: true,

            endAdornment: (
              <InputAdornment position="start" sx={{ marginLeft: "-1px" }}>
                <IconButton edge="end" size="small">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    );
  }
);

SearchInput.displayName = "SearchInput";
