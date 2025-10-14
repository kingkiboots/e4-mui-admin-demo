import { isNullOrEmpty } from "@/shared/lib/commonHelpers";
import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
  type MouseEventHandler,
} from "react";
import { useLocation } from "react-router-dom";

import { useGetMenuListQuery } from "@/entities/admin/menu/lib/useMenuApiQueries";
import type { MenuList } from "@/entities/admin/menu/types";
import type { ApiAxiosResponse } from "@/shared/type";
import { findActiveMenuId } from "../model/handleFindActiveMenuId";

export const useControlSidebarNavGroup = () => {
  const select = useCallback((res: ApiAxiosResponse<MenuList>) => {
    const data = res.data.data;
    if (!data) {
      return undefined;
    }

    return data;
  }, []);

  const { data: menuList } = useGetMenuListQuery({
    select,
  });

  const { pathname } = useLocation();
  const activatedGroupId = useMemo(() => {
    return findActiveMenuId(pathname, menuList);
  }, [pathname, menuList]);

  const [openedGroupId, setOpenedGroupId] = useState<string | null>(
    activatedGroupId
  );

  useLayoutEffect(() => {
    if (isNullOrEmpty(activatedGroupId) || activatedGroupId === openedGroupId) {
      return;
    }

    setTimeout(() => {
      setOpenedGroupId(activatedGroupId);
    }, 100);
  }, [activatedGroupId]);

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
    menuList,
    openedGroupId,
    activatedGroupId,
    handleClickGroup,
  };
};
