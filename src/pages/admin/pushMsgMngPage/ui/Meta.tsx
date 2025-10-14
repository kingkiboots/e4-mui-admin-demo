import React, { type PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";

const Meta: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>MSA 방송푸시 메시지관리</title>
        <meta name="description" content="MSA 방송푸시 메시지관리 페이지" />
      </Helmet>

      {children}
    </>
  );
};

export default Meta;
