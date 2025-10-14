import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
// eslint-disable-next-line no-restricted-imports -- MUI Button을 Override 하기 위해 사용
import MUITextField from "@mui/material/TextField";
import {
  memo,
  useCallback,
  useId,
  type ChangeEventHandler,
  type ComponentPropsWithoutRef,
} from "react";
import { type UseFormRegisterReturn } from "react-hook-form";
import { InputWrapper, type BaseInputProps } from "./CommontInputUI";

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
}));

interface TextFieldProps
  extends BaseInputProps,
    Omit<ComponentPropsWithoutRef<typeof StyledTextField>, "type"> {
  register?: UseFormRegisterReturn;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const TextField = memo(
  ({
    totalColSpan,
    labelColSpan,
    inputColSpan,
    label,
    placeholder,
    required,
    register,
    onChange,
    ...restProps
  }: TextFieldProps) => {
    const id = useId();

    const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
      (evt) => {
        onChange?.(evt);
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
        required={required}
      >
        <FormControl fullWidth size="small">
          <StyledTextField
            type="text"
            id={id}
            variant="outlined"
            {...register}
            fullWidth
            required={required}
            placeholder={placeholder}
            onChange={handleChange}
            {...restProps}
          />
        </FormControl>
      </InputWrapper>
    );
  }
);

TextField.displayName = "TextField";
