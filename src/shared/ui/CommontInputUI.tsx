import { Row } from "./RowUI";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";
import { Col, type ColProps } from "./ColUI";
import type { PropsWithChildren, ReactNode } from "react";

export const FormGroupRow = styled(Row, {
  name: "FormGroupRow",
  label: "form-group-row",
})();

export const FormCol = styled(Col, {
  name: "FormCol",
  label: "form-col",
})({
  alignSelf: "center",
});

export const StyledLabel = styled(FormLabel)(({ theme }) => ({
  paddingTop: `calc(${theme.spacing(1)} + 1px)`,
  paddingBottom: `calc(${theme.spacing(1)} + 1px)`,
  marginBottom: 0,

  // Flexbox로 별표 위치 제어
  display: "inline-flex",
  flexDirection: "row-reverse", // 별표를 왼쪽으로
  justifyContent: "flex-end",
  alignItems: "center",

  fontWeight: "bold",
  letterSpacing: "-1px",
  lineHeight: 1.47,
  fontSize: "1.3rem",

  "& .MuiFormLabel-asterisk": {
    color: "red",
    marginRight: "3px",
    marginLeft: 0,
  },

  [theme.breakpoints.down("lg")]: {
    textAlign: "right",
    justifyContent: "flex-end", // 오른쪽 정렬 유지
  },
}));
export interface BaseInputProps {
  totalColSpan?: ColProps["size"];
  labelColSpan?: ColProps["size"];
  inputColSpan?: ColProps["size"];
  label?: ReactNode;
  required?: boolean;
  placeholder?: string;
}

export interface InputWrapperProps extends BaseInputProps, PropsWithChildren {
  id: string;
}
export const InputWrapper = ({
  totalColSpan = { xs: 12, sm: 4 },
  labelColSpan = { xs: 12, sm: 3 },
  inputColSpan = { xs: 12, sm: 9 },
  id,
  label,
  required,
  children,
}: InputWrapperProps) => {
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
        <FormCol size={inputColSpan}>{children}</FormCol>
      </FormGroupRow>
    </Col>
  );
};
