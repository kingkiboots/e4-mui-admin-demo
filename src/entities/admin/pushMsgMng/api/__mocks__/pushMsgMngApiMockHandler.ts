import { restApiConfig } from "@/shared/config";
import { withDelay } from "@/shared/lib/apiMockHelpers";
import type { AxiosRequestConfig } from "axios";
import MockAdapter from "axios-mock-adapter";
import type { PushMsgListSearchParams } from "../../types";
import { isEmpty, isNullOrEmpty } from "@/shared/lib/commonHelpers";

// export const pushMsgMngApiMockHandler = (mockInstance: MockAdapter) => {
//   mockInstance.onGet(restApiConfig.api.pushMsgMng.list).reply(
//     withDelay(0, {
//       status: 200,
//       data: {
//         code: "0000",
//         message: "정상 처리 되었습니다.",
//         timestamp: "20240726092207",
//         data: Array(10)
//           .fill(null)
//           .map((_, idx) => ({
//             serviceCd: String(115515451 + idx),
//             seq: String(5665456 + idx),
//             name: "	푸시제목 테스트" + idx,
//             content: "푸시내용 테스트" + idx,
//             url: "https://www.test.com/event/push?q=" + idx,
//             useYn: idx % 2 === 0 ? "Y" : "N",
//           })),
//       },
//     })
//   );
// };

//NOTE - 받는 파라미터 확인할 수 있는 방식
export const pushMsgMngApiMockHandler = (mockInstance: MockAdapter) => {
  mockInstance
    .onGet(restApiConfig.api.pushMsgMng.list)
    .reply((config: AxiosRequestConfig) => {
      console.log("config.params", config.params);
      const { serviceCd = "", seq = "" } = (
        isNullOrEmpty(config.params) ? {} : config.params
      ) as PushMsgListSearchParams;

      return withDelay(500, {
        status: 200,
        data: {
          code: "0000",
          message: "정상 처리 되었습니다.",
          timestamp: "20240726092207",
          data: Array(10)
            .fill(null)
            .map((_, idx) => ({
              serviceCd: String(115515451 + idx),
              seq: String(5665456 + idx),
              name: "	푸시제목 테스트" + idx,
              content: "푸시내용 테스트" + idx,
              url: "https://www.test.com/event/push?q=" + idx,
              useYn: idx % 2 === 0 ? "Y" : "N",
            }))
            .filter((item) => {
              return (
                (isEmpty(serviceCd)
                  ? item.serviceCd === item.serviceCd
                  : item.serviceCd.startsWith(serviceCd)) &&
                (isEmpty(seq)
                  ? item.seq === item.seq
                  : item.seq.startsWith(seq))
              );
            }),
        },
      })(config);
    });
};
