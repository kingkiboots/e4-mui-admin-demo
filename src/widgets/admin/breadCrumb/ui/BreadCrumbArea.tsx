import { memo } from "react";

const BreadCrumbArea = memo(() => {
  return (
    <ol className="breadcrumb bg-transparent breadcrumb-sm pl-0 pr-0">
      <li className="breadcrumb-item">
        <a href="#">
          <i className="fal fa-home mr-1"></i> Home
        </a>
      </li>
      <li className="breadcrumb-item">
        <a href="#">해피페이머니</a>
      </li>
      <li className="breadcrumb-item active">한도 관리</li>
    </ol>
  );
});

BreadCrumbArea.displayName = "BreadCrumbArea";
export default BreadCrumbArea;
