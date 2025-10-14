import { memo } from "react";
import { SidebarListItem } from "../component/SidebarListItem";
import { SidebarListItemText } from "../component/SidebarListItemText";
import { SidebarNavSubListItem } from "../component/SidebarNavListItem";
import type { MenuData } from "@/entities/admin/menu/types";

interface SidebarNavItemProps extends Pick<MenuData, "menuUrl" | "label"> {
  isActive: boolean;
}

const SidebarSubNavItem = memo(
  ({ menuUrl, label, isActive }: SidebarNavItemProps) => {
    return (
      <SidebarListItem>
        <SidebarNavSubListItem isActive={isActive} to={menuUrl ?? "#"}>
          <SidebarListItemText label={label} isActive={isActive} />
        </SidebarNavSubListItem>
      </SidebarListItem>
    );
  }
);

SidebarSubNavItem.displayName = "SidebarSubNavItem";
export default SidebarSubNavItem;
