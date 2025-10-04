import {
  // eslint-disable-next-line no-restricted-imports -- MUI Button을 Override 하기 위해 사용
  Button as MuiButton,
  type ButtonProps as MuiButtonProps,
} from "@mui/material";
import { forwardRef, useCallback, type MouseEventHandler } from "react";
import { useThrottle } from "../lib/timingHelpers";

export const Button = forwardRef<HTMLButtonElement, MuiButtonProps>(
  ({ onClick, ...props }, ref) => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
      (evt) => {
        if (onClick) {
          onClick(evt);
        }
      },
      [onClick]
    );

    // 자동으로 쓰로틀 적용
    const throttle = useThrottle();
    const throttledClick = throttle(handleClick, 300);

    return <MuiButton ref={ref} onClick={throttledClick} {...props} />;
  }
);

Button.displayName = "Button";
