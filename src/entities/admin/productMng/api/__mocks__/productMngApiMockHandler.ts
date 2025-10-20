import { restApiConfig } from "@/shared/config";
import { withDelay } from "@/shared/lib/apiMockHelpers";
import { isEmpty, isNullOrEmpty } from "@/shared/lib/commonHelpers";
import type { AxiosRequestConfig } from "axios";
import MockAdapter from "axios-mock-adapter";
import type { ProductMngListSearchData } from "../../types";

export const prodcutMngApiMockHandler = (mockInstance: MockAdapter) => {
  // mockInstance.onGet(restApiConfig.api.productMng.list).reply(
  //   withDelay(500, {
  //     status: 200,
  //     data: {
  //       code: "0000",
  //       message: "정상 처리 되었습니다.",
  //       timestamp: "20240726092207",
  //       data: Array(1)
  //         .fill([
  //           {
  //             eventId: "EVT20251014A01",
  //             mediaId: "KBANK001",
  //             giftId: "GFT000123",
  //             gifttName: "스타벅스 아메리카노 Tall",
  //             brandId: "BRD001",
  //             brandName: "스타벅스",
  //             useYn: "Y",
  //             saleEndDate: "2026-10-14 10:00:00",
  //             salePrice: "3000",
  //             saleDisAmt: "300",
  //             img250: "GFT000123_img_250.png",
  //             img500: "GFT000123_img_500.png",
  //             giftTypeCd: "1616115",
  //             giftSubTypeCd: "51561611",
  //             subTypeNm: "커피상품권",
  //             regStepDt: "2025-10-14 10:00:00",
  //             regStepId: "40160706",
  //             updStepDt: "2025-10-14 10:00:00",
  //             updStepId: "40160706",
  //           },
  //           {
  //             eventId: "EVT20251014A02",
  //             mediaId: "KBANK002",
  //             giftId: "GFT000124",
  //             gifttName: "스타벅스 아메리카노 Grande",
  //             brandId: "BRD001",
  //             brandName: "스타벅스",
  //             useYn: "Y",
  //             saleEndDate: "2025-12-22 10:00:00",
  //             salePrice: "4200",
  //             saleDisAmt: "1000",
  //             img250: "GFT000124_img_250.png",
  //             img500: "GFT000124_img_500.png",
  //             giftTypeCd: "1616115",
  //             giftSubTypeCd: "51561611",
  //             subTypeNm: "커피상품권",
  //             regStepDt: "2025-10-13 09:00:00",
  //             regStepId: "40160706",
  //             updStepDt: "2025-10-13 10:00:00",
  //             updStepId: "40160706",
  //           },
  //         ])
  //         .flat(),
  //     },
  //   })
  // );

  mockInstance
    .onGet(restApiConfig.api.productMng.list)
    .reply((config: AxiosRequestConfig) => {
      console.log("test");
      console.log(
        restApiConfig.api.productMng.list,
        "config.params",
        config.params
      );
      const { serviceCd = "", seq = "" } = (
        isNullOrEmpty(config.params) ? {} : config.params
      ) as ProductMngListSearchData;

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
