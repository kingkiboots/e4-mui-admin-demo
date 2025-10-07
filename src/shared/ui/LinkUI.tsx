// eslint-disable-next-line no-restricted-imports
import { Link as MuiLink, type LinkProps as MuiLinkProps } from "@mui/material";
import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router-dom";
import {
  forwardRef,
  useCallback,
  useMemo,
  type MouseEventHandler,
} from "react";
import { useThrottle } from "../lib/timingHelpers";

//FIXME - 왜 이거를 오버라이드한 애들은 우선 순위가 높은가. 그걸 고치고 오버라이드한 애들이 먼저 되게 수정할 것

type LinkProps = (MuiLinkProps | RouterLinkProps) & {
  to?: string;
  href?: string;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ onClick, href, to, ...props }, ref) => {
    const handleClick: MouseEventHandler<HTMLAnchorElement> = useCallback(
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

    // 외부 링크 판단
    const isExternal = useMemo(
      () => href && (href.startsWith("http") || href.startsWith("//")),
      [href]
    );

    // 자동 분기
    if (isExternal || (href && !to)) {
      return (
        <MuiLink
          ref={ref}
          href={href}
          onClick={throttledClick}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          {...props}
        />
      );
    }

    return (
      <MuiLink
        ref={ref}
        component={RouterLink}
        to={to ?? "/"}
        onClick={throttledClick}
        {...props}
      />
    );
  }
);

Link.displayName = "Link";
