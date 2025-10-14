import { useControlSidebarNavGroup } from "@/features/admin/sidebar/hook/useControlSidebarNavGroup";
import type { MuiExtraProps } from "@/shared/type";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import SidebarNavGroup from "./SidebarNavGroup";

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

const NavSkeleton = styled(Skeleton, {
  name: "NavSkeleton",
  label: "nav-skeleton",
})(({ theme }) => ({
  backgroundColor: theme.palette.sidebar.activeMenu,
  width: "90%",
  height: "4.8rem",
  "&::after": {
    backgroundColor: theme.palette.sidebar.active,
  },
}));

const SidebarNav = memo(() => {
  const {
    menuList,
    openedGroupId,
    activatedGroupId,
    handleClickGroup,
    isPending,
  } = useControlSidebarNavGroup();

  return (
    <StyledNav component="nav" role="navigation">
      <NavMenu component="ul">
        {isPending ? (
          <>
            <Stack gap="16px" alignItems="center">
              {new Array(5).fill(null).map(() => (
                <NavSkeleton variant="rounded" />
              ))}
            </Stack>
          </>
        ) : (
          menuList?.map((group, idx) => {
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
          })
        )}
      </NavMenu>
    </StyledNav>
  );
});

SidebarNav.displayName = "SidebarNav";
export default SidebarNav;
