import { isNullOrEmpty } from "@/shared/lib/commonHelpers";

type NavigateConfig = typeof import("@/entities/admin/menu/config/menus.json");

export const findActiveMenuId = (
  pathname: string,
  navigationConfig: NavigateConfig
) => {
  let targetIdx = 0;

  const activatedGroup = navigationConfig.find((group, idx) => {
    const result = group.children.some((item) => item.menuUrl === pathname);
    if (result == true) {
      targetIdx = idx;
      return true;
    }
    return false;
  });

  return activatedGroup ? `${activatedGroup.label}-${targetIdx}` : null;
};

// NOTE - navigationConfig에서 현재 메뉴 찾고, 부모부터 순서대로 배열로 담는다.
export const getCurrentMenuTree = (
  pathname: string,
  navigationConfig: NavigateConfig,
  menuTree: { label: string; menuUrl: string | null }[] = []
) => {
  for (const { menuUrl, label, ...menu } of navigationConfig) {
    if (menuUrl === pathname) {
      menuTree.push({ label, menuUrl });
      break;
    }

    if (isNullOrEmpty(menu.children)) {
      continue;
    }

    for (const { label: subLabel, menuUrl: subMenuUrl } of menu.children) {
      if (subMenuUrl === pathname) {
        menuTree.push({ label: subLabel, menuUrl: subMenuUrl });
        menuTree.unshift({ label, menuUrl });
        break;
      }
    }
  }

  return menuTree;
};
