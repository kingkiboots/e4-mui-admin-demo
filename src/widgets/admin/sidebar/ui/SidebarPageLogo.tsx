import { domainConfig } from "@/shared/config";
import { Link } from "@/shared/ui/LinkUI";
import { Logo } from "@/shared/ui/LogoUI";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { memo } from "react";

const PageLogoWrapper = styled(Box, {
  name: "PageLogoWrapper",
  label: "page-logo",
})(({ theme }) => ({
  height: "6.6rem",
  width: "27rem",
  maxWidth: "27rem",
  overflow: "hidden",
  textAlign: "center",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  flexGrow: 0,
  flexShrink: 0,
  minHeight: 1,
  padding: "0 2rem",

  // 배경색과 구분선
  backgroundColor: theme.palette.sidebar?.background,
  backgroundImage:
    "linear-gradient(270deg, rgba(255, 255, 255, 0), transparent)",

  boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.3)",

  transition: "all 470ms cubic-bezier(0.34, 1.25, 0.3, 1)",
}));

const SidebarPageLogo = memo(() => {
  return (
    <PageLogoWrapper>
      <Link
        href={domainConfig.root}
        className="page-logo-link"
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          flex: "1 0 auto",
        }}
      >
        <Logo sx={{ width: "auto", height: "auto" }} />
        <Typography
          component="span"
          className="page-logo-text mr-1 fw-500"
          sx={{
            marginRight: "0.4rem",
            marginLeft: "0.8rem",
            fontWeight: 500,
            fontSize: "2.08rem",
            color: (theme) => theme.palette.sidebar?.text,
            display: "block",
            textAlign: "left",
            flex: "1 0 auto",
          }}
        >
          Pay 2.0 System
        </Typography>
      </Link>
    </PageLogoWrapper>
  );
});

SidebarPageLogo.displayName = "SidebarPageLogo";
export default SidebarPageLogo;
