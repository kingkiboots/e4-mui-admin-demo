import { useGetMenuListQuery } from "@/entities/admin/menu/lib/useMenuApiQueries";
import type { MenuList } from "@/entities/admin/menu/types";
import type { ApiAxiosResponse } from "@/shared/type";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { getCurrentMenuTree } from "../model/handleFindActiveMenuId";

export const useGetCurrentMenu = () => {
  const { pathname } = useLocation();

  const select = useCallback(
    (res: ApiAxiosResponse<MenuList>) => {
      const data = res.data.data;
      if (!data) {
        return [];
      }

      return getCurrentMenuTree(pathname, data) ?? [];
    },
    [pathname]
  );

  const { data: currentMenuTree, ...query } = useGetMenuListQuery({
    select,
  });

  return {
    currentMenuTree,
    ...query,
  };
};
