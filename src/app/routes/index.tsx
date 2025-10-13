import { domainConfig } from "@/shared/config";
import type { ExtendedRouteObject } from "@/shared/type/react-router-dom-types";
import BaseLayout from "../layout/BaseLayout";
import { Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

const routes: ExtendedRouteObject[] = [
  {
    path: domainConfig.root,
    element: <BaseLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <Navigate to={`/${domainConfig.admin.limitMng}`} replace />,
      },
      {
        path: "health",
        lazy: () =>
          import("../../pages/common/health").then((module) => ({
            Component: module.default,
          })),
      },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          {
            path: "limitMng",
            lazy: () =>
              import("../../pages/admin/limitMngPage").then((module) => ({
                Component: module.default,
              })),
          },
        ],
      },
    ],
  },
];

export default routes;
