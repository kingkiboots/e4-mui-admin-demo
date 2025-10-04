import type { RouteObject } from "react-router-dom";

export type ExtendedRouteObject = RouteObject & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: () => any;
  children?: ExtendedRouteObject[];
};
