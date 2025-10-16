import { menuApiMockHandler } from "@/entities/admin/menu/api/__mocks__/menuApiMockHandler";
import { pushMsgMngApiMockHandler } from "@/entities/admin/pushMsgMng/api/__mocks__/pushMsgMngApiMockHandler";
import { apiClientMocker } from "@/shared/api/netInstances";

//NOTE - 여기에 등록하면 api 보다 우선시 되니 api 만들어지면 해당 mock handler 지울것!
export default () => {
  menuApiMockHandler(apiClientMocker);
  pushMsgMngApiMockHandler(apiClientMocker);
};
