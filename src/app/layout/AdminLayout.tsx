import PageInner from "@/shared/layout/PageInner";
import PageWrapper from "@/shared/layout/PageWrapper";
import BreadCrumbArea from "@/widgets/admin/breadCrumb/ui/BreadCrumbArea";
import Header from "@/widgets/admin/header/ui/Header";
import Sidebar from "@/widgets/admin/sidebar/ui/Sidebar";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
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
          <main id="js-page-content" role="main" className="page-content">
            <Suspense>
              <BreadCrumbArea />
            </Suspense>
            <Suspense>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </PageInner>
    </PageWrapper>
  );
};

export default AdminLayout;
