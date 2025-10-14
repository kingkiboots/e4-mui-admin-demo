// eslint-disable-next-line no-restricted-imports -- MUI Button을 Override 하기 위해 사용
import MUIButtonGroup, {
  type ButtonGroupProps as MUIButtonGroupProps,
} from "@mui/material/ButtonGroup";

export interface ButtonGroupProps extends MUIButtonGroupProps {}

export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return (
    <MUIButtonGroup {...props} className="btn-group">
      {children}
    </MUIButtonGroup>
  );
};
