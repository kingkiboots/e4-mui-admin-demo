import { getTimeMilliseconds } from "@/shared/lib/commonHelpers";
import type { ApiAxiosResponse } from "@/shared/type";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { getMenuList } from "../api/menuApi";
import type { MenuList } from "../types";

export const menuApiQueryKey = createQueryKeys("menuApiQueryKey", {
  list: ["list"],
});

export const useGetMenuListQuery = <TData>(options?: {
  select: (res: ApiAxiosResponse<MenuList>) => TData;
}) => {
  return useQuery({
    queryKey: menuApiQueryKey.list.queryKey,
    select: options?.select,
    queryFn: () => getMenuList(),
    staleTime: getTimeMilliseconds(30, "min"),
    gcTime: getTimeMilliseconds(1, "hour"),
  });
};
