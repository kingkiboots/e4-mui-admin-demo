import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import { useId, type ComponentProps } from "react";
import { type FieldValues } from "react-hook-form";
import { InputWrapper, type BaseInputProps } from "./BaseInputUI";
// eslint-disable-next-line no-restricted-imports -- MUI Button을 Override 하기 위해 사용
import MUITextField from "@mui/material/TextField";
import { disabledInputStyles } from "../model/commonStyles";
import { withController } from "./ControlledFieldUI";

const StyledTextField = styled(MUITextField, {
  name: "StyledTextField",
  label: "StyledTextField",
})(({ theme }) => ({
  // TextField 컨테이너가 아니라 내부 요소에 적용
  "& .MuiInputBase-root": {
    height: "calc(1.8rem + 1.2rem + 2px)",
    fontSize: "1.2rem",
    lineHeight: 1.5,
    color: theme.palette.grey[600],
    fontWeight: 400,
    backgroundColor: theme.palette.background.paper,
  },
  "& .MuiInputBase-input": {
    padding: `0.6rem 1.3054rem`,
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    "& fieldset": {
      borderColor: theme.palette.grey[50],
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.grey[300],
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },

  ...disabledInputStyles(theme),
}));
export interface BaseTextFieldProps
  extends BaseInputProps,
    ComponentProps<typeof StyledTextField> {}

function BaseTextField({
  name,
  value,
  defaultValue,
  slotProps,
  totalColSpan,
  labelColSpan,
  inputColSpan,
  label,
  required,
  placeholder,
  helperText,
  error,
  onChange,
  ...restProps
}: BaseTextFieldProps) {
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
        <StyledTextField
          name={name}
          //NOTE - value 에 undefined가 들어가면 안됨. 아니면 아래 같은 에러 발생
          // MUI: A component is changing the uncontrolled value state of a picker component to be controlled.
          value={value ?? ""}
          defaultValue={defaultValue}
          onChange={onChange}
          required={required}
          error={error}
          helperText={helperText}
          slotProps={{
            input: {
              id,
              placeholder,
              fullWidth: true,
              size: "small",
              ...slotProps?.input, // 외부 slotProps 병합
            },
            ...slotProps,
          }}
          {...restProps}
        />
      </FormControl>
    </InputWrapper>
  );
}

const TextField = withController<FieldValues, BaseTextFieldProps>(
  BaseTextField
);

/**
 * TextField: controller 있는 버전
 * BaseTextField: controller 없는 기본 버전
 */
export { BaseTextField, TextField };
