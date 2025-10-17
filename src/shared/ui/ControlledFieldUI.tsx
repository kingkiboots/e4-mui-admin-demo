import { memo, type ComponentType } from "react";
import {
  Controller,
  type ControllerProps,
  type FieldValues,
} from "react-hook-form";
import { VALIDATION_MSG_UNVALID_REQUIRED } from "../const";

interface ControlledFieldProps<T extends FieldValues>
  extends Omit<ControllerProps<T>, "render"> {}

export function withController<
  TFieldValues extends FieldValues,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TProps extends Record<string, any>
>(Component: ComponentType<TProps>) {
  function ControlledComponent(
    props: ControlledFieldProps<TFieldValues> &
      Omit<TProps, keyof ControlledFieldProps<TFieldValues>>
  ) {
    const {
      name,
      control,
      rules,
      defaultValue,
      shouldUnregister,
      required,
      onChange,
      value,
      ...restProps
    } = props;

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
        render={({ field, fieldState: { error } }) => {
          const fieldProps = {
            value: value ?? field.value ?? "",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange: (...args: any[]) => {
              onChange?.(...args);
              field.onChange(...args);
            },
            onBlur: field.onBlur,
            inputRef: field.ref,
          };

          return (
            <Component
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              {...(restProps as any)}
              {...fieldProps}
              required={isRequired}
              error={!!error}
              helperText={error?.message}
            />
          );
        }}
      />
    );
  }

  const MemoizedComponent = memo(ControlledComponent) as (<
    T extends TFieldValues
  >(
    props: ControlledFieldProps<T> & Omit<TProps, keyof ControlledFieldProps<T>>
  ) => React.JSX.Element) & { displayName?: string };

  MemoizedComponent.displayName = `Controlled(${
    Component.displayName || Component.name || "Component"
  })`;

  return MemoizedComponent;
}
