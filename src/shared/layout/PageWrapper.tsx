import { styled } from "@mui/material/styles";
import Box, { type BoxProps } from "@mui/material/Box";

export interface PageWrapperProps extends BoxProps {
  /** 전체 화면 높이 사용 여부 */
  fullHeight?: boolean;
}

/**
 * 페이지 최상위 래퍼 컴포넌트
 * Flexbox 레이아웃의 컨테이너 역할
 */
export const PageWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "fullHeight",
  name: "PageWrapper",
  label: "page-wrapper",
})<PageWrapperProps>(({ theme, fullHeight = false, style }) => ({
  position: "relative",
  display: "flex",
  alignItems: "stretch",
  flex: "1 1 auto",
  width: "100%",

  // fullHeight 옵션
  ...(fullHeight && {
    minHeight: "100vh",
  }),

  // 반응형 처리
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  ...style,
}));

export default PageWrapper;
