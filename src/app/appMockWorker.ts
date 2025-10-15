import { menuApiMockHandler } from "@/entities/admin/menu/api/__mocks__/menuApiMockHandler";
import { pushMsgMngApiMockHandler } from "@/entities/admin/pushMsgMng/api/__mocks__/pushMsgMngApiMockHandler";
import { apiClientMocker } from "@/shared/api/netInstances";

export default () => {
  menuApiMockHandler(apiClientMocker);
  pushMsgMngApiMockHandler(apiClientMocker);
};
