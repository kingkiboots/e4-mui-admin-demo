import PageInner from "@/shared/layout/PageInner";
import PageWrapper from "@/shared/layout/PageWrapper";
import Header from "@/widgets/admin/header/ui/Header";
import Sidebar from "@/widgets/admin/sidebar/ui/Sidebar";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const BaseLayout: React.FC = () => {
  return (
    <PageWrapper>
      <PageInner>
        <Suspense>
          <Sidebar />
        </Suspense>
        <div className="page-content-wrapper">
          <Suspense>
            <Header />
          </Suspense>
          <Suspense>
            <main id="js-page-content" role="main" className="page-content">
              <Outlet />
            </main>
          </Suspense>
        </div>
      </PageInner>
    </PageWrapper>
  );
};

export default BaseLayout;
