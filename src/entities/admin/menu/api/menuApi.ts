import { apiClient } from "@/shared/api/netInstances";
import type { ApiAxiosResponse } from "@/shared/type";
import { restApiConfig } from "@/shared/config";
import type { MenuList } from "../types";

export const getMenuList = async (): Promise<ApiAxiosResponse<MenuList>> => {
  return await apiClient.get(restApiConfig.api.menu.list);
};
