import type { RouteObject } from "react-router-dom";

export type ExtendedRouteObject = RouteObject & {
  component?: () => any;
  children?: ExtendedRouteObject[];
};
