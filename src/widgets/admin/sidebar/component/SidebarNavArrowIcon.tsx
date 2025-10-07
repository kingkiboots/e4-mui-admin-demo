import { Icon } from "@/shared/ui/IconUI";
import { styled } from "@mui/material/styles";
import { memo } from "react";

const SidebarArrowIcon = styled(Icon, {
  name: "SidebarNavArrowIcon",
})(({ theme }) => ({
  fontSize: "1.8rem",
  color: theme.palette.sidebar.menu,
}));

interface SidebarNavArrowIconProps {
  isOpen: boolean;
}

export const SidebarNavArrowIcon = memo<SidebarNavArrowIconProps>(
  ({ isOpen }) => {
    return (
      <SidebarArrowIcon
        name={isOpen ? "ExpandLessOutlined" : "ExpandMoreOutlined"}
      />
    );
  }
);

SidebarNavArrowIcon.displayName = "SidebarNavArrowIcon";
