// eslint-disable-next-line no-restricted-imports -- MUI Button을 Override 하기 위해 사용
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";
import type { Dayjs } from "dayjs";
import { memo, useId, type ComponentPropsWithoutRef } from "react";
import { InputWrapper, type BaseInputProps } from "./BaseInputUI";

const StyledDatePicker = styled(MUIDatePicker, {
  name: "StyledDatePicker",
  label: "styled-date-picker",
})(({ theme }) => ({
  width: "100%",

  "& .MuiPickersInputBase-root": {
    fontSize: "1.2rem",
    lineHeight: 1.5,
    color: theme.palette.grey[600],
    fontWeight: 400,
    backgroundColor: theme.palette.background.paper,
    height: "calc(1.8rem + 1.2rem + 2px)",
  },

  "& .MuiPickersSectionList-root": {},

  "& .MuiOutlinedInput-root": {
    borderRadius: "4px 0 0 4px", // 왼쪽만 둥글게 (버튼이 오른쪽에)
    "& fieldset": {
      borderColor: theme.palette.grey[300],
    },
  },

  // 캘린더 아이콘 버튼
  "& .MuiInputAdornment-root .MuiIconButton-root": {
    height: "calc(1.8rem + 1.2rem + 2px)",
    padding: "0.4rem 0.8rem",
    marginRight: "-13px",
    borderRadius: "0 4px 4px 0",
    backgroundColor: theme.palette.grey[50],
    border: `1px solid ${theme.palette.grey[50]}`,
    borderLeft: "none",
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
    },
  },
}));

export interface DatePickerProps
  extends BaseInputProps,
    ComponentPropsWithoutRef<typeof StyledDatePicker> {
  value?: Dayjs | null;
  onChange?: (value: Dayjs | null) => void;
}
export const DatePicker = memo(
  ({
    totalColSpan,
    labelColSpan,
    inputColSpan,
    label,
    value,
    required,
    format = "YYYY-MM-DD",
    placeholder,
    onChange,
    slotProps,
    ...restProps
  }: DatePickerProps) => {
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
          <StyledDatePicker
            value={value}
            onChange={onChange}
            format={format}
            slotProps={{
              textField: {
                id,
                placeholder,
                fullWidth: true,
                size: "small",
                ...slotProps?.textField, // 외부 slotProps 병합
              },
              ...slotProps,
            }}
            {...restProps}
          />
        </FormControl>
      </InputWrapper>
    );
  }
);
DatePicker.displayName = "DatePicker";
