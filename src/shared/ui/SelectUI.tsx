import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
// eslint-disable-next-line no-restricted-imports -- MUI Button을 Override 하기 위해 사용
import MUISelect, {
  type BaseSelectProps as MUIBaseSelectProps,
} from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { useId, type ComponentProps } from "react";
import { type FieldValues } from "react-hook-form";
import { isNullOrEmpty } from "../lib/commonHelpers";
import { disabledInputStyles } from "../model/commonStyles";
import { InputWrapper, type BaseInputProps } from "./BaseInputUI";
import { withController } from "./ControlledFieldUI";

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
  ...disabledInputStyles(theme),
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

interface BaseSelectProps
  extends BaseInputProps,
    ComponentProps<typeof StyledSelect> {
  options: SelectOption[];
  helperText?: React.ReactNode;
  onChange?: MUIBaseSelectProps["onChange"];
}

function BaseSelect({
  name,
  value,

  defaultValue,
  slotProps,
  totalColSpan,
  labelColSpan,
  inputColSpan,
  label,
  required,
  options,
  placeholder,
  helperText,
  error,
  MenuProps,
  onChange,
  ...restProps
}: BaseSelectProps) {
  const id = useId();

  return (
    <InputWrapper
      totalColSpan={totalColSpan}
      labelColSpan={labelColSpan}
      inputColSpan={inputColSpan}
      label={label}
      id={id}
      required={required}
    >
      <FormControl fullWidth size="small">
        <StyledSelect
          name={name}
          value={value ?? ""}
          onChange={onChange}
          defaultValue={defaultValue}
          required={required}
          error={!!error}
          slotProps={{
            input: {
              id,
              placeholder,
              ...slotProps?.input, // 외부 slotProps 병합
            },
            ...slotProps,
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiMenuItem-root": {
                  justifyContent: "center",
                },
                ...MenuProps?.PaperProps?.sx,
              },
              ...MenuProps?.PaperProps,
            },
            ...MenuProps,
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
        {isNullOrEmpty(helperText) ? undefined : (
          <FormHelperText>{helperText}</FormHelperText>
        )}
      </FormControl>
    </InputWrapper>
  );
}

const Select = withController<FieldValues, BaseSelectProps>(BaseSelect);
export { Select };
