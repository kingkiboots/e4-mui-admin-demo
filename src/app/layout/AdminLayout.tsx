import { PageContent } from "@/shared/layout/PageContent";
import { PageContentWrapper } from "@/shared/layout/PageContentWrapper";
import PageInner from "@/shared/layout/PageInner";
import PageWrapper from "@/shared/layout/PageWrapper";
import BreadCrumbArea from "@/widgets/admin/breadCrumb/ui/BreadCrumbArea";
import Header from "@/widgets/admin/header/ui/Header";
import Sidebar from "@/widgets/admin/sidebar/ui/Sidebar";
import ErrorFallback from "@/widgets/error/5xx/ui/ErrorFallback";
import React, { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
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
          <PageContent component="main" role="main">
            <Suspense>
              <BreadCrumbArea />
            </Suspense>
            <Suspense>
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Outlet />
              </ErrorBoundary>
            </Suspense>
          </PageContent>
        </PageContentWrapper>
      </PageInner>
    </PageWrapper>
  );
};

export default AdminLayout;
