export const findActiveMenuId = (
  pathname: string,
  navigationConfig: typeof import("@/entities/admin/menu/config/menus.json")
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
