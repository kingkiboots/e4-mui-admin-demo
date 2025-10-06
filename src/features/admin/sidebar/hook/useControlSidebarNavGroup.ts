import { useCallback, useMemo, useState, type MouseEventHandler } from "react";
import { isNullOrEmpty } from "@/shared/lib/commonHelpers";
import { useLocation } from "react-router-dom";

import navigationConfig from "@/entities/admin/menu/config/menus.json";
import { findActiveMenuId } from "../model/handleFindActiveMenuId";

export const useControlSidebarNavGroup = () => {
  const { pathname } = useLocation();

  const activatedGroupId = useMemo(() => {
    return findActiveMenuId(pathname, navigationConfig);
  }, [pathname]);

  const [openedGroupId, setOpenedGroupId] = useState<string | null>(
    activatedGroupId
  );

  const handleClickGroup: MouseEventHandler<HTMLAnchorElement> = useCallback(
    (evt) => {
      const { menuId } = evt.currentTarget.dataset;
      if (isNullOrEmpty(menuId)) {
        console.warn("[SidebarNav,handleClickGroup] menuId is null or empty");
        return;
      }

      setOpenedGroupId((prev) => {
        if (prev === menuId) {
          return null;
        }
        return menuId;
      });
    },
    []
  );

  return {
    navigationConfig,
    openedGroupId,
    activatedGroupId,
    handleClickGroup,
  };
};
