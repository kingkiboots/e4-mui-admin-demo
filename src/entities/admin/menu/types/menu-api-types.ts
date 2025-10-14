export type MenuData = {
  id: string | null;
  icon: string | null;
  label: string;
  menuUrl: string | null;
  children: MenuData[];
};

export type MenuList = MenuData[];
