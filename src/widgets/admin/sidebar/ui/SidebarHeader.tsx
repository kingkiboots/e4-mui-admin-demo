import { memo } from "react";
import SidebarPageLogo from "./SidebarPageLogo";

const SidebarHeader = memo(() => {
  return <SidebarPageLogo />;
});

SidebarHeader.displayName = "SidebarHeader";
export default SidebarHeader;
