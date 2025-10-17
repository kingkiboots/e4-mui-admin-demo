import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
// eslint-disable-next-line no-restricted-imports -- MUI Button을 Override 하기 위해 사용
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { memo, useCallback, useId, type ComponentPropsWithoutRef } from "react";
import { isNullOrEmpty } from "../lib/commonHelpers";
import {
  disabledInputStyles,
  inputEndAdorementStyles,
} from "../model/commonStyles";
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
  ...inputEndAdorementStyles(theme),

  ...disabledInputStyles(theme),
}));

export type DateTimeType = "date" | "start" | "end";
const getFormatOnDateTimeType = (
  type: DateTimeType,
  format = "YYYY-MM-DD"
): string => {
  switch (type) {
    case "start":
      return `${format} 00:00:00`;
    case "end":
      return `${format} 23:59:59`;
    case "date":
    default:
      return format;
  }
};

export type DatePickerOnChangeFunction = (value: Dayjs | null) => void;
export interface DatePickerProps
  extends BaseInputProps,
    Omit<
      ComponentPropsWithoutRef<typeof StyledDatePicker>,
      "value" | "onChange"
    > {
  value?: string;
  dateTimeType?: DateTimeType;
  onChange?: (value: string | null) => void;
}
export const DatePicker = memo(
  ({
    totalColSpan,
    labelColSpan,
    inputColSpan,
    label,
    value,
    required,
    dateTimeType = "date",
    format = "YYYY-MM-DD",
    placeholder,
    onChange,
    slotProps,
    ...restProps
  }: DatePickerProps) => {
    const id = useId();

    const dayjsValue = value ? dayjs(value) : null;

    const handleChange: DatePickerOnChangeFunction = useCallback(
      (newValue) => {
        if (isNullOrEmpty(newValue) || !newValue.isValid()) {
          onChange?.(null);
          return;
        }

        const formatted = newValue.format("YYYYMMDD");

        onChange?.(formatted);
      },
      [onChange]
    );

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
            //NOTE - value 에 undefined가 들어가면 안됨. 아니면 아래 같은 에러 발생
            // MUI: A component is changing the uncontrolled value state of a picker component to be controlled.
            value={dayjsValue}
            onChange={handleChange}
            format={getFormatOnDateTimeType(dateTimeType, format)}
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
