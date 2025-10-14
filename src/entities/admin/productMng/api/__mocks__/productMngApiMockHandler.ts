import { withDelay } from "@/shared/lib/apiMockHelpers";
import MockAdapter from "axios-mock-adapter";

export const prodcutMngApiMockHandler = (mockInstance: MockAdapter) => {
  mockInstance.onGet("/api/money/getProductMng").reply(
    withDelay(500, {
      status: 200,
      data: {
        code: "0000",
        message: "정상 처리 되었습니다.",
        timestamp: "20240726092207",
        data: Array(4)
          .fill([
            {
              title: "생일 쿠폰 발급 안내",
              date: "05/03",
              content: "Hello World!",
              read: true,
            },
            {
              title: "소멸예정 포인트 안내",
              date: "05/03",
              content: "Hello World!",
              read: true,
            },
            {
              title: "회원정보 업데이트",
              date: "05/03",
              content: "Hello Dude!",
              read: true,
            },
            {
              title: "신규 고객 포인트 제공",
              date: "05/03",
              content: "Hello Dude!",
              read: true,
            },
          ])
          .flat(),
      },
    })
  );
};
