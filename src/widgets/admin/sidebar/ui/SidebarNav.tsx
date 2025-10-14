import { memo } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import type { MuiExtraProps } from "@/shared/type";
import SidebarNavGroup from "./SidebarNavGroup";
import { useControlSidebarNavGroup } from "@/features/admin/sidebar/hook/useControlSidebarNavGroup";

const StyledNav = styled(Box, {
  name: "SidebarNav",
  label: "primary-nav",
})<MuiExtraProps>(({ theme }) => ({
  overflow: "auto",
  overflowX: "hidden",
  backfaceVisibility: "hidden",

  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "3px",
  },

  // 992px 이하일 때
  [theme.breakpoints.down("lg")]: {
    overflow: "auto",
    overflowX: "hidden",
    height: "calc(100% - 11.1rem)",
  },
}));

const NavMenu = styled(List, {
  name: "NavMenu",
  label: "nav-menu",
})<MuiExtraProps>(({ theme }) => ({
  margin: 0,
  padding: 0,
  "&:first-of-type": {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const SidebarNav = memo(() => {
  const {
    navigationConfig,
    openedGroupId,
    activatedGroupId,
    handleClickGroup,
  } = useControlSidebarNavGroup();

  return (
    <StyledNav component="nav" role="navigation">
      <NavMenu component="ul">
        {navigationConfig.map((group, idx) => {
          const id = `${group.label}-${idx}`;
          return (
            <SidebarNavGroup
              key={id}
              isOpen={openedGroupId === id}
              isActive={activatedGroupId === id}
              onClick={handleClickGroup}
              {...group}
              id={id}
            />
          );
        })}
      </NavMenu>
    </StyledNav>
  );
});

SidebarNav.displayName = "SidebarNav";
export default SidebarNav;
