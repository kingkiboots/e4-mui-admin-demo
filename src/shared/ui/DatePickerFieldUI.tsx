// shared/ui/form/DatePickerField.tsx
import { Controller } from "react-hook-form";
import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { DatePicker } from "./DatePickerUI";
import type { BaseInputProps } from "./CommontInputUI";
import React, { memo } from "react";
interface DatePickerFieldProps<T extends FieldValues> extends BaseInputProps {
  name: FieldPath<T>;
  control: Control<T>;
}

function DatePickerFieldComponent<T extends FieldValues>({
  name,
  control,
  ...props
}: DatePickerFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <DatePicker
          value={value}
          onChange={onChange}
          slotProps={{
            textField: {
              error: !!error,
              helperText: error?.message,
            },
          }}
          {...props}
        />
      )}
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
