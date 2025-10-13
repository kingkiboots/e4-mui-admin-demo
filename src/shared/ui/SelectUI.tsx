import FormLabel from "@mui/material/FormLabel";
// eslint-disable-next-line no-restricted-imports -- MUI Button을 Override 하기 위해 사용
import MUISelect, {
  type BaseSelectProps,
  type SelectChangeEvent,
} from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import {
  memo,
  useCallback,
  useId,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { Col, type ColProps } from "./ColUI";
import { Row } from "./RowUI";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

export interface SelectOption {
  value: string;
  label: string;
}

const StyledSelect = styled(MUISelect, {
  name: "MUISelect",
  label: "select",
})(({ theme }) => ({
  display: "block",
  width: "100%",
  textAlign: "left",
  //   height: "calc(1.8rem + 1.2rem + 2px)",

  //   padding: `0.6rem 1.3054rem`,

  fontSize: "1.2rem",
  lineHeight: 1.5,
  borderRadius: "4px",
  color: theme.palette.grey[600],
  fontWeight: 400,
  backgroundColor: theme.palette.background.paper,
  backgroundClip: "padding-box",
  border: `1px solid ${theme.palette.grey[50]}`,
  transition:
    "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out",
}));

const StyledMenu = styled(MenuItem, { name: "StyledMenu", label: "option" })(
  ({ theme }) => ({
    fontSize: "1.2rem",
    color: theme.palette.text.default,
    fontWeight: 500,
  })
);

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

interface SelectProps
  extends Omit<ComponentPropsWithoutRef<typeof StyledSelect>, "onChange"> {
  totalColSpan?: ColProps["size"];
  labelColSpan?: ColProps["size"];
  inputColSpan?: ColProps["size"];
  label?: ReactNode;
  options: SelectOption[];
  placeholder?: string;
  register?: UseFormRegisterReturn;
  onChange?: BaseSelectProps["onChange"];
}

export const Select = memo(
  ({
    totalColSpan = { xs: 12, sm: 3 },
    labelColSpan = { xs: 12, sm: 3 },
    inputColSpan = { xs: 12, sm: 9 },
    label,
    required,
    options,
    defaultValue,
    placeholder,
    register,
    onChange,
    ...restProps
  }: SelectProps) => {
    const id = useId();

    const handleChange: BaseSelectProps["onChange"] = useCallback(
      (evt: SelectChangeEvent<unknown>, child: React.ReactNode) => {
        onChange?.(evt, child);
        register?.onChange?.(evt);
      },

      [onChange, register?.onChange]
    );

    return (
      <Col size={totalColSpan} sx={{ alignSelf: "center" }}>
        <FormGroupRow>
          {/* 라벨 */}
          <FormCol size={labelColSpan} sx={{ textAlign: { lg: "right" } }}>
            <StyledLabel required={required} htmlFor={id}>
              {label}
            </StyledLabel>
          </FormCol>
          {/* 인풋 */}
          <FormCol size={inputColSpan}>
            <FormControl fullWidth size="small">
              <StyledSelect
                {...register}
                id={id}
                defaultValue={defaultValue}
                onChange={handleChange}
                {...restProps}
              >
                {placeholder && <MenuItem value="">{placeholder}</MenuItem>}
                {options.map((option) => (
                  <StyledMenu key={option.value} value={option.value}>
                    {option.label}
                  </StyledMenu>
                ))}
              </StyledSelect>
            </FormControl>
          </FormCol>
        </FormGroupRow>
      </Col>
    );
  }
);

Select.displayName = "Select";
