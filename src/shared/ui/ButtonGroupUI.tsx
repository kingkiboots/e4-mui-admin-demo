// eslint-disable-next-line no-restricted-imports -- MUI Button을 Override 하기 위해 사용
import MUIButtonGroup, {
  type ButtonGroupProps as MUIButtonGroupProps,
} from "@mui/material/ButtonGroup";
import type { ComponentProps } from "react";
import type { Button } from "./ButtonUI";

type ButtonType = React.ReactElement<ComponentProps<typeof Button>>;

export interface ButtonGroupProps
  extends Omit<MUIButtonGroupProps, "children"> {
  children?: ButtonType | ButtonType[];
}

export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return (
    <MUIButtonGroup {...props} className="btn-group">
      {children}
    </MUIButtonGroup>
  );
};
