import { type PropsWithChildren } from "react";
import type React from "react";
import { BreadCrumbArea } from "./BreadCrumbArea";

const PageContentLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <BreadCrumbArea />
      {children}
    </>
  );
};

export default PageContentLayout;
