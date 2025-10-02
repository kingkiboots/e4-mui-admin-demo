import type { NestedRoutes } from "../type";

const routesDef = {
  root: "/",
  admin: {
    dashboard: "dashboard",
    user: {
      list: "user/list",
      detail: "user/detail/:id",
    },
  },
  // user: {
  //   profile: "profile",
  //   settings: "settings",
  // },
} as const;

// 타입 안전한 domainConfig
export const domainConfig = routesDef as unknown as NestedRoutes<
  "",
  typeof routesDef
>;
