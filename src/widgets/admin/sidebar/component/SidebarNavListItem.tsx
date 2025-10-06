import { Link } from "@/shared/ui/LinkUI";
import type { Theme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import type { ComponentProps } from "react";

// --------------------
// 타입
// --------------------
interface SidebarNavListItemProps
  extends Pick<ComponentProps<typeof Link>, "to" | "href"> {
  isActive: boolean;
  isOpen: boolean;
}

// --------------------
// 공통 스타일 오브젝트
// --------------------
const baseSidebarItemStyles = ({
  theme,
}: {
  theme: Theme;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) => ({
  width: "100%",
  height: theme.spacing(6),
  display: "flex",
  alignItems: "center",
  outline: "none",
  fontSize: "1.4rem",
  padding: "1.3rem",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  transition:
    "color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
});

// --------------------
// 스타일 유틸 함수 (상태별 스타일만 따로)
// --------------------
const sidebarItemStateStyles = (
  theme: Theme,
  { isActive, isOpen }: Pick<SidebarNavListItemProps, "isActive" | "isOpen">
) => ({
  color: `${theme.palette.sidebar.menu} !important`,
  fontWeight: `${isActive ? 600 : 400} !important`,

  ...(isActive && {
    color: `${theme.palette.sidebar.active} !important`,
    backgroundColor: "rgba(255, 255, 255, 0.04) !important",
    boxShadow: `inset 3px 0 0 ${theme.palette.info.main}`,
  }),

  ...(isOpen && {
    color: `${theme.palette.sidebar.text} !important`,
  }),

  "&:hover": {
    color: theme.palette.sidebar.text,
    backgroundColor: theme.palette.action.hover,
  },
});

// --------------------
// 메인 컴포넌트
// --------------------
export const SidebarNavListItem = styled(Link, {
  shouldForwardProp: (prop) => !["isActive", "isOpen"].includes(prop as string),
})<SidebarNavListItemProps>(({ theme, isActive, isOpen }) => ({
  ...baseSidebarItemStyles({ theme }),
  ...sidebarItemStateStyles(theme, { isActive, isOpen }),
}));

// --------------------
// Sub 컴포넌트
// --------------------
interface SidebarNavSubListItemProps
  extends Omit<SidebarNavListItemProps, "isOpen"> {}

export const SidebarNavSubListItem = styled(Link, {
  shouldForwardProp: (prop) => !["isActive"].includes(prop as string),
})<SidebarNavSubListItemProps>(({ theme, isActive }) => ({
  ...baseSidebarItemStyles({ theme }),
  ...sidebarItemStateStyles(theme, { isActive, isOpen: false }), // 고정값
  paddingLeft: "5.3rem",

  // 추가 오버라이드
  ...(isActive && {
    backgroundColor: "transparent",
    boxShadow: "none",
  }),
}));
