import { memo } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

type MuiExtraProps = {
  component: React.ElementType;
};

const StyledSidebar = styled(Box, {
  name: "Sidebar",
  label: "page-sidebar",
})<MuiExtraProps>(({ theme }) => ({
  position: "relative",
  flex: "1 0 auto",
  width: "27rem",
  maxWidth: "27rem",
  flexDirection: "column",
  display: "flex",
  zIndex: 1002,
  willChange: "left, right",

  backgroundColor: theme.palette.sidebar?.background,
  // 그라디언트 배경
  backgroundImage:
    "linear-gradient(270deg, rgba(51, 148, 225, 0.18), transparent)",
}));

const Sidebar = memo(() => {
  return (
    <StyledSidebar component="aside">
      <SidebarHeader />
      <SidebarNav />
    </StyledSidebar>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
