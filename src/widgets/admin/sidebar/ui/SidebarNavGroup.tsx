import type { MenuData } from "@/entities/admin/menu/types";
import { isNullOrEmpty, joinClassNames } from "@/shared/lib/commonHelpers";
import type { MuiExtraProps } from "@/shared/type";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import { memo, type MouseEventHandler } from "react";
import { useLocation } from "react-router-dom";
import { SidebarListItem } from "../component/SidebarListItem";
import { SidebarListItemText } from "../component/SidebarListItemText";
import { SidebarNavArrowIcon } from "../component/SidebarNavArrowIcon";
import { SidebarNavListItem } from "../component/SidebarNavListItem";
import { SidebarNavMenuIcon } from "../component/SidebarNavMenuIcon";
import SidebarSubNavItem from "./SidebarSubNavItem";

interface SidebarNavGroupProps extends MenuData {
  isOpen: boolean;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLAnchorElement>;
  defaultOpen?: boolean;
}

const SubNavMenu = styled(List)<MuiExtraProps>(({ theme }) => ({
  backgroundColor: theme.palette.sidebar.hover,
}));

const SidebarNavGroup = memo(
  ({
    id,
    icon,
    label,
    menuUrl,
    isOpen,
    isActive,
    onClick,
    children,
  }: SidebarNavGroupProps) => {
    const location = useLocation();

    const hasChildren = !isNullOrEmpty(children);

    return (
      <>
        <SidebarListItem
          className={joinClassNames(
            isOpen ? "open" : "",
            isActive ? "active" : ""
          )}
        >
          <SidebarNavListItem
            href={isNullOrEmpty(menuUrl) ? "#" : menuUrl}
            onClick={hasChildren ? onClick : undefined}
            aria-expanded={isOpen}
            data-menu-id={id}
            isActive={isActive}
            isOpen={isOpen}
          >
            <SidebarNavMenuIcon icon={icon} />
            <SidebarListItemText label={label} isActive={isActive} />
            {hasChildren ? <SidebarNavArrowIcon isOpen={isOpen} /> : undefined}
          </SidebarNavListItem>
        </SidebarListItem>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <SubNavMenu component="ul">
            {children?.map((menu, idx) => (
              <SidebarSubNavItem
                key={`${id}-${idx}`}
                menuUrl={menu.menuUrl}
                label={menu.label}
                isActive={
                  menu.menuUrl !== "/" && location.pathname === menu.menuUrl
                }
              />
            ))}
          </SubNavMenu>
        </Collapse>
      </>
    );
  }
);

SidebarNavGroup.displayName = "SidebarNavGroup";
export default SidebarNavGroup;
