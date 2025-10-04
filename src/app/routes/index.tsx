import { domainConfig } from "@/shared/config";
import type { ExtendedRouteObject } from "@/shared/type/react-router-dom-types";
import BaseLayout from "../layout/BaseLayout";

const routes: ExtendedRouteObject[] = [
  {
    path: domainConfig.root,
    element: <BaseLayout />,
    children: [
      {
        path: "",
        index: true,
        lazy: () =>
          import("../../pages/admin/limitMngPage").then((module) => ({
            Component: module.default,
          })),
      },
    ],
  },
];

export default routes;
