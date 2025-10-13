// eslint-disable-next-line no-restricted-imports -- MUI Button을 Override 하기 위해 사용
import MUITextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import {
  memo,
  useCallback,
  useId,
  type ChangeEventHandler,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { Col, type ColProps } from "./ColUI";
import { Row } from "./RowUI";
import FormLabel from "@mui/material/FormLabel";
import { type UseFormRegisterReturn } from "react-hook-form";

const StyledTextField = styled(MUITextField, {
  name: "MUITextField",
  label: "text-field",
})();

// const StyledLabel = styled(FormLabel, {
//   name: "FormLabel",
//   label: "form-label",
// })();

interface TextFieldProps
  extends Omit<ComponentPropsWithoutRef<typeof StyledTextField>, "type"> {
  totalColSpan?: ColProps["size"];
  labelColSpan?: ColProps["size"];
  inputColSpan?: ColProps["size"];
  label?: ReactNode;
  register?: UseFormRegisterReturn;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const TextField = memo(
  ({
    totalColSpan = { xs: 12, sm: 3 },
    labelColSpan = { xs: 12, sm: 3 },
    inputColSpan = { xs: 12, sm: 9 },
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
      <Col size={totalColSpan}>
        <Row spacing={2}>
          {/* 라벨 */}
          <Col size={labelColSpan} sx={{ textAlign: { lg: "right" } }}>
            <FormLabel required={required} htmlFor={id}>
              {label}
            </FormLabel>
          </Col>
          {/* 인풋 */}
          <Col size={inputColSpan}>
            <StyledTextField
              id={id}
              {...register}
              fullWidth
              placeholder={placeholder}
              onChange={handleChange}
              {...restProps}
            />
          </Col>
        </Row>
      </Col>
    );
  }
);

TextField.displayName = "TextField";
