import { restApiConfig } from "@/shared/config";
import { withDelay } from "@/shared/lib/apiMockHelpers";
import MockAdapter from "axios-mock-adapter";

export const evnetMngApiMockHandler = (mockInstance: MockAdapter) => {
  mockInstance.onGet(restApiConfig.api.eventMng.list).reply(
    withDelay(500, {
      status: 200,
      data: {
        code: "0000",
        message: "정상 처리 되었습니다.",
        timestamp: "20240726092207",
        data: Array(1)
          .fill([
            {
              id: "115515451",
              name: "혜택명 테스트1",
              code: "51515151",
              difCode: "5616542",
              searchCode:"15151512",
              suName:"수혜조건명 테스트",
              suSearchCode:"1515112",
              typeName:"지급조건명 테스트",
              stDt : "2022-10-22 10:00:00",
              edDt : "2022-10-22 :11:00:00",
              useYn : "Y",
              setdef : "식별기준 1",
            },
             {
              id: "115515451",
              name: "혜택명 테스트1",
              code: "51515151",
              difCode: "5616542",
              searchCode:"15151512",
              suName:"수혜조건명 테스트",
              suSearchCode:"1515112",
              typeName:"지급조건명 테스트",
              stDt : "2022-10-22 10:00:00",
              edDt : "2022-10-22 :11:00:00",
              useYn : "Y",
              setdef : "식별기준 1",
            },
           
          ])
          .flat(),
      },
    })
  );
};
