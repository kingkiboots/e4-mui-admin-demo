// RESTFULL 하게 서버의 api 경로를 이곳 한곳에서 관라하기 위함임

// api 경로가 바뀌어도 일일히 찾아가서 바꾸지 않기 위함
export const restApiConfig = {
  api: {
    eventMng: {
      list: "/api/eventMng/list",
    },
    productMng: {
      list: "/api/productMng/list",
    },
    pushMsgMng: {
      list: "/api/pushMsgMng/list",
    },
    menu: {
      list: "/api/menu/list",
    },
  },
} as const;
