// shared/ui/form/DatePickerField.tsx
import React, { memo } from "react";
import type { ControllerProps, FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";
import { VALIDATION_MSG_UNVALID_REQUIRED } from "../const";
import type { BaseInputProps } from "./BaseInputUI";
import { DatePicker, type DatePickerProps } from "./DatePickerUI";

type DateTimeType = "date" | "start" | "end";
interface DatePickerFieldProps<T extends FieldValues>
  extends BaseInputProps,
    Omit<ControllerProps<T>, "render"> {
  dateTimeType?: DateTimeType;
  value?: string;
  onChange?: DatePickerProps["onChange"];
}

const getFormatOnDateTimeType = (type: DateTimeType): string => {
  switch (type) {
    case "start":
      return "YYYY-MM-DD 00:00:00";
    case "end":
      return "YYYY-MM-DD 23:59:59";
    case "date":
    default:
      return "YYYY-MM-DD";
  }
};

function DatePickerFieldComponent<T extends FieldValues>({
  name,
  control,
  rules,
  required,
  defaultValue,
  dateTimeType = "date",
  shouldUnregister,
  ...props
}: DatePickerFieldProps<T>) {
  const isRequired = required || !!rules?.required;
  const mergedRules = {
    ...rules,
    ...(isRequired
      ? {
          required: VALIDATION_MSG_UNVALID_REQUIRED,
        }
      : undefined),
  };
  return (
    <Controller
      name={name}
      control={control}
      rules={mergedRules}
      defaultValue={defaultValue}
      shouldUnregister={shouldUnregister}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <DatePicker
            value={value}
            onChange={onChange}
            required={isRequired}
            format={getFormatOnDateTimeType(dateTimeType)}
            slotProps={{
              textField: {
                error: !!error,
                helperText: error?.message,
              },
            }}
            {...props}
          />
        );
      }}
    />
  );
}

const DatePickerField = memo(DatePickerFieldComponent) as (<
  T extends FieldValues
>(
  props: DatePickerFieldProps<T>
) => React.JSX.Element) & { displayName?: string };

DatePickerField.displayName = "DatePickerField";

export { DatePickerField };
