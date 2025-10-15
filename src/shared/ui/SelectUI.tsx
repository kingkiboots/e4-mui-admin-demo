import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
// eslint-disable-next-line no-restricted-imports -- MUI Button을 Override 하기 위해 사용
import MUISelect, {
  type BaseSelectProps,
  type SelectChangeEvent,
} from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { memo, useCallback, useId, type ComponentPropsWithoutRef } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { InputWrapper, type BaseInputProps } from "./BaseInputUI";

export interface SelectOption {
  value: string;
  label: string;
}

const StyledSelect = styled(MUISelect, {
  name: "StyledSelect",
  label: "styled-select",
})(({ theme }) => ({
  "& .MuiSelect-select": {
    padding: `0.6rem 1.3054rem`,
    fontSize: "1.2rem",
    textAlign: "center",
    lineHeight: 1.5,
    color: theme.palette.grey[600],
    fontWeight: 400,
    height: "auto",
  },
  "& .MuiMenu-list": {
    textAlign: "center",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.grey[50],
    borderRadius: "4px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.grey[300],
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
  backgroundColor: theme.palette.background.paper,
  height: "calc(1.8rem + 1.2rem + 2px)",
}));

const StyledMenu = styled(MenuItem, { name: "StyledMenu", label: "option" })(
  ({ theme }) => ({
    fontSize: "1.2rem",
    color: theme.palette.text.default,
    fontWeight: 500,
  })
);

interface SelectProps
  extends BaseInputProps,
    Omit<ComponentPropsWithoutRef<typeof StyledSelect>, "onChange"> {
  options: SelectOption[];
  register?: UseFormRegisterReturn;
  onChange?: BaseSelectProps["onChange"];
}

export const Select = memo(
  ({
    totalColSpan,
    labelColSpan,
    inputColSpan,
    label,
    required,
    options,
    defaultValue,
    placeholder,
    register,
    onChange,
    ...restProps
  }: SelectProps) => {
    const id = useId();

    const handleChange: BaseSelectProps["onChange"] = useCallback(
      (evt: SelectChangeEvent<unknown>, child: React.ReactNode) => {
        onChange?.(evt, child);
        register?.onChange?.(evt);
      },

      [onChange, register?.onChange]
    );

    return (
      <InputWrapper
        totalColSpan={totalColSpan}
        labelColSpan={labelColSpan}
        inputColSpan={inputColSpan}
        label={label}
        id={id}
        required={required || register?.required}
      >
        <FormControl fullWidth size="small">
          <StyledSelect
            {...register}
            id={id}
            defaultValue={defaultValue}
            required={required}
            onChange={handleChange}
            MenuProps={{
              PaperProps: {
                sx: {
                  "& .MuiMenuItem-root": {
                    justifyContent: "center",
                  },
                },
              },
            }}
            {...restProps}
          >
            {placeholder && <MenuItem value="">{placeholder}</MenuItem>}
            {options.map((option) => (
              <StyledMenu key={option.value} value={option.value}>
                {option.label}
              </StyledMenu>
            ))}
          </StyledSelect>
        </FormControl>
      </InputWrapper>
    );
  }
);

Select.displayName = "Select";
