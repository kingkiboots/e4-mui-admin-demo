import { Icon } from "@/shared/ui/IconUI";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/material/styles";
import { memo } from "react";

const SidebarNavListItemIcon = styled(ListItemIcon, {
  name: "SidebarNavMenuIcon",
})(({ theme }) => ({
  mr: theme.spacing(0),
  fontSize: "1.8rem",
  width: theme.spacing(4),
  minWidth: theme.spacing(4),
  textAlign: "left",
  color: theme.palette.sidebar.menu,
}));

interface SidebarNavMenuIconProps {
  icon?: string;
}

export const SidebarNavMenuIcon = memo<SidebarNavMenuIconProps>(({ icon }) => {
  return (
    <SidebarNavListItemIcon>
      <Icon name={icon} />
    </SidebarNavListItemIcon>
  );
});

SidebarNavMenuIcon.displayName = "SidebarNavMenuIcon";
