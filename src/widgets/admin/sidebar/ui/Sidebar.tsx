import { memo } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { UI_DRAWER_WIDTH } from "@/shared/const";

type MuiExtraProps = {
  component: React.ElementType;
};

const StyledSidebar = styled(Box, {
  name: "Sidebar",
  label: "page-sidebar",
})<MuiExtraProps>(({ theme }) => ({
  position: "relative",
  flex: "1 0 auto",
  // width: UI_DRAWER_WIDTH,
  // maxWidth: UI_DRAWER_WIDTH,
  flexDirection: "column",
  display: "flex",
  zIndex: 1002,
  willChange: "left, right",

  overflowX: "hidden",

  backgroundColor: theme.palette.sidebar?.background,
  backgroundImage: theme.palette.sidebar?.backgroundImage,
}));

const Sidebar = memo(({ isDrawerOpen }: { isDrawerOpen: boolean }) => {
  return (
    <Drawer
      sx={{
        width: UI_DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: UI_DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
    >
      <StyledSidebar component="aside">
        <SidebarHeader />
        <SidebarNav />
      </StyledSidebar>
    </Drawer>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
