import { menuApiMockHandler } from "@/entities/admin/menu/api/__mocks__/menuApiMockHandler";
import { apiClientMocker } from "@/shared/api/netInstances";

export default () => {
  menuApiMockHandler(apiClientMocker);
};
