import { restApiConfig } from "@/shared/config";
import { withDelay } from "@/shared/lib/apiMockHelpers";
import MockAdapter from "axios-mock-adapter";
import menuMockData from "@/entities/admin/menu/config/menus.json";

export const menuApiMockHandler = (mockInstance: MockAdapter) => {
  mockInstance.onGet(restApiConfig.api.menu.list).reply(
    withDelay(200, {
      status: 200,
      data: {
        code: "0000",
        message: "정상 처리 되었습니다.",
        timestamp: "20240726092207",
        data: menuMockData,
      },
    })
  );
};
