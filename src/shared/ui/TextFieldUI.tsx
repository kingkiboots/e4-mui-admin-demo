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
import FormControl from "@mui/material/FormControl";

const StyledTextField = styled(MUITextField)(({ theme }) => ({
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

const FormGroupRow = styled(Row, {
  name: "FormGroupRow",
  label: "form-group-row",
})();

const FormCol = styled(Col, {
  name: "FormCol",
  label: "form-col",
})({
  alignSelf: "center",
});

const StyledLabel = styled(FormLabel, {
  name: "FormLabel",
  label: "form-label",
})(({ theme }) => ({
  paddingTop: `calc(${theme.spacing(1)} + 1px)`,
  paddingBottom: `calc(${theme.spacing(1)} + 1px)`,
  mb: 0,

  alignSelf: "center",
  fontWeight: "bold",
  letterSpacing: "-1px",
  lineHeight: 1.47,
  fontSize: "1.3rem",

  // 반응형 처리
  [theme.breakpoints.down("lg")]: {
    textAlign: "right",
  },
}));

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
    totalColSpan = { xs: 12, sm: 4 },
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
      <Col size={totalColSpan} sx={{ alignSelf: "center" }}>
        <FormGroupRow>
          {/* 라벨 */}
          <FormCol size={labelColSpan} sx={{ textAlign: { lg: "right" } }}>
            <StyledLabel required={required} htmlFor={id}>
              {label}
            </StyledLabel>
          </FormCol>
          {/* 인풋 */}
          <FormCol size={inputColSpan}>
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
          </FormCol>
        </FormGroupRow>
      </Col>
    );
  }
);

TextField.displayName = "TextField";
