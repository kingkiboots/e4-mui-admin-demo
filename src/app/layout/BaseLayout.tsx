import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const BaseLayout: React.FC = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};

export default BaseLayout;
