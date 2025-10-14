import { memo } from "react";
import { SidebarListItem } from "../component/SidebarListItem";
import { SidebarListItemText } from "../component/SidebarListItemText";
import { SidebarNavSubListItem } from "../component/SidebarNavListItem";

interface SidebarNavItemProps {
  menuUrl: string;
  label: string;
  isActive: boolean;
}

const SidebarSubNavItem = memo(
  ({ menuUrl, label, isActive }: SidebarNavItemProps) => {
    return (
      <SidebarListItem>
        <SidebarNavSubListItem isActive={isActive} to={menuUrl}>
          <SidebarListItemText label={label} isActive={isActive} />
        </SidebarNavSubListItem>
      </SidebarListItem>
    );
  }
);

SidebarSubNavItem.displayName = "SidebarSubNavItem";
export default SidebarSubNavItem;
