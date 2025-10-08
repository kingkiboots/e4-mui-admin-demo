import { useLocation } from "react-router-dom";
import navigationConfig from "@/entities/admin/menu/config/menus.json";
import { useMemo } from "react";
import { getCurrentMenuTree } from "../model/handleFindActiveMenuId";

export const useGetCurrentMenu = () => {
  const { pathname } = useLocation();

  const currentMenuTree = useMemo(() => {
    return getCurrentMenuTree(pathname, navigationConfig) ?? [];
  }, [pathname]);

  return {
    currentMenuTree,
  };
};
