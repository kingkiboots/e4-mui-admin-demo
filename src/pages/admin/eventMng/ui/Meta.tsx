import React, { type PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";

const Meta: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>이벤트관리</title>
        <meta name="description" content="이벤트관리페이지" />
      </Helmet>

      {children}
    </>
  );
};

export default Meta;
