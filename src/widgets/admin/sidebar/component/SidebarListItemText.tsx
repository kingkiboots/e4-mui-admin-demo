import ListItemText from "@mui/material/ListItemText";
import React, { memo, type ComponentProps } from "react";

interface SidebarListItemTextProps extends ComponentProps<typeof ListItemText> {
  label: React.ReactNode;
  isActive: boolean;
}

export const SidebarListItemText = memo(
  ({ label, isActive, ...props }: SidebarListItemTextProps) => {
    return (
      <ListItemText
        className="nav-link-text"
        primary={label}
        slotProps={{
          primary: {
            fontWeight: isActive ? 600 : 400,
          },
        }}
        {...props}
      />
    );
  }
);
SidebarListItemText.displayName = "SidebarListItemText";
