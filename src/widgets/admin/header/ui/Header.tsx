import React, { memo } from "react";

const Header = memo(() => {
  return (
    <header className="page-header" role="banner">
      {/* <!-- DOC: nav menu layout change shortcut --> */}
      <div className="hidden-md-down dropdown-icon-menu position-relative">
        <a
          href="#"
          className="header-btn btn js-waves-off"
          data-action="toggle"
          data-className="nav-function-hidden"
          title="Hide Navigation"
        >
          <i className="ni ni-menu"></i>
        </a>
        <ul>
          <li>
            <a
              href="#"
              className="btn js-waves-off"
              data-action="toggle"
              data-className="nav-function-minify"
              title="Minify Navigation"
            >
              <i className="ni ni-minify-nav"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="btn js-waves-off"
              data-action="toggle"
              data-className="nav-function-fixed"
              title="Lock Navigation"
            >
              <i className="ni ni-lock-nav"></i>
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- DOC: mobile button appears during mobile width --> */}
      <div className="hidden-lg-up">
        <a
          href="#"
          className="header-btn btn press-scale-down waves-effect waves-themed"
          data-action="toggle"
          data-className="mobile-nav-on"
        >
          <i className="ni ni-menu"></i>
        </a>
      </div>
      <div className="ml-auto d-flex">
        {/* <!-- app user menu --> */}
        <div>
          <a
            href="#"
            data-toggle="dropdown"
            title="회원정보"
            className="header-icon d-flex align-items-center justify-content-center ml-2"
          >
            <img
              src="img/demo/avatars/avatar-m.png"
              className="profile-image rounded-circle"
              alt="Admin"
            />
            <span className="userinfo mgl10">admin님 환영합니다.</span>
          </a>
        </div>
        <div>
          <a
            href="#"
            data-toggle="dropdown"
            title="회원정보변경"
            className="header-icon d-flex align-items-center justify-content-center ml-2"
          >
            <i className="fal fa-ellipsis-v"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-animated dropdown">
            <a
              href="#"
              className="dropdown-item m-0 pt-3 pb-3"
              data-toggle="modal"
              data-target="#password-change-modal"
            >
              <span>비밀번호변경</span>
              <i className="fal fa-lock-alt float-right"></i>
            </a>
            <div className="dropdown-divider m-0"></div>
            <a href="login.html" className="dropdown-item fw-500 pt-3 pb-3">
              <span>Logout</span>
              <i className="fal fa-sign-out-alt float-right"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
