import { PageContentWrapper } from "@/shared/layout/PageContentWrapper";
import PageInner from "@/shared/layout/PageInner";
import PageWrapper from "@/shared/layout/PageWrapper";
import BreadCrumbArea from "@/widgets/admin/breadCrumb/ui/BreadCrumbArea";
import Header from "@/widgets/admin/header/ui/Header";
import Sidebar from "@/widgets/admin/sidebar/ui/Sidebar";
import React, { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
  // TODO - 나중에 zustand 등 전역 상태관리로 바꿀 것
  const [isDrawerOpen, setisDrawerOpen] = useState<boolean>(true);

  const handleDrawerToggle = () => {
    setisDrawerOpen((prev) => !prev);
  };

  return (
    <PageWrapper>
      <PageInner>
        <Suspense>
          <Sidebar isDrawerOpen={isDrawerOpen} />
        </Suspense>
        <PageContentWrapper isDrawerOpen={isDrawerOpen}>
          <Suspense>
            <Header
              isDrawerOpen={isDrawerOpen}
              onClickToggleDrawer={handleDrawerToggle}
            />
          </Suspense>
          <main id="js-page-content" role="main" className="page-content">
            <Suspense>
              <BreadCrumbArea />
            </Suspense>
            <Suspense>
              <Outlet />
            </Suspense>
          </main>
        </PageContentWrapper>
      </PageInner>
    </PageWrapper>
  );
};

export default AdminLayout;
