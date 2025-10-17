import { type ComponentProps } from "react";
import type { FieldValues } from "react-hook-form";
import type { BaseInputProps } from "./BaseInputUI";
import { withController } from "./ControlledFieldUI";
import { DatePicker } from "./DatePickerUI";

interface BaseDatePickerFieldProps
  extends BaseInputProps,
    ComponentProps<typeof DatePicker> {}

const DatePickerField = withController<FieldValues, BaseDatePickerFieldProps>(
  DatePicker
);

export { DatePickerField };
