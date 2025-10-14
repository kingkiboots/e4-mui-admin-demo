import { memo, type MouseEventHandler } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import SidebarSubNavItem from "./SidebarSubNavItem";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import { isNullOrEmpty, joinClassNames } from "@/shared/lib/commonHelpers";
import type { MuiExtraProps } from "@/shared/type";
import { SidebarNavListItem } from "../component/SidebarNavListItem";
import { SidebarListItem } from "../component/SidebarListItem";
import { SidebarListItemText } from "../component/SidebarListItemText";
import { SidebarNavMenuIcon } from "../component/SidebarNavMenuIcon";
import { SidebarNavArrowIcon } from "../component/SidebarNavArrowIcon";

interface SidebarNavGroupProps {
  id: string;
  icon: string;
  label: string;
  children: Array<{
    menuUrl: string;
    label: string;
  }>;
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
            href="#"
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
            {children.map((menu, idx) => (
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
