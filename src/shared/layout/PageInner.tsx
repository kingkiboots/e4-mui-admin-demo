import { styled } from "@mui/material/styles";
import Box, { type BoxProps } from "@mui/material/Box";
// eslint-disable-next-line no-restricted-imports
import type { Breakpoint } from "@mui/material/styles";

export interface PageInnerProps extends BoxProps {
  /** 패딩 사이즈 (theme.spacing 배수) */
  spacing?: number;
  /** 최대 너비 제한 */
  maxWidth?: Breakpoint;
}

/**
 * 페이지 내부 콘텐츠 컨테이너
 * PageWrapper 내부에서 사용
 */
export const PageInner = styled(Box, {
  shouldForwardProp: (prop) => prop !== "spacing" && prop !== "maxWidth",
  name: "PageInner",
  label: "page-inner",
})<PageInnerProps>(({ theme, spacing = 0, maxWidth, style }) => ({
  display: "flex",
  alignItems: "stretch",
  flex: "1 1 auto",
  width: "100%",

  minHeight: "100vh",

  // 패딩 적용
  ...(spacing && {
    padding: theme.spacing(spacing),
  }),

  // 최대 너비 제한
  ...(maxWidth && {
    maxWidth: theme.breakpoints.values[maxWidth as Breakpoint],
    margin: "0 auto",
  }),
  ...style,
}));

export default PageInner;
