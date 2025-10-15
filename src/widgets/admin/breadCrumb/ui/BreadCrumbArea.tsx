import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "@/shared/ui/LinkUI";
import { memo } from "react";
import { useGetCurrentMenu } from "@/features/admin/sidebar/hook/useGetCurrentMenu";
import { styled } from "@mui/material/styles";
import { isNullOrEmpty } from "@/shared/lib/commonHelpers";
import Skeleton from "@mui/material/Skeleton";

const StyledBreadcrumb = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive?: boolean }>(() => ({
  display: "flex",
  alignItems: "center",
  maxWidth: "13rem",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  transition: "all 0.3s ease-in-out;",
}));

const BreadCrumbArea = memo(() => {
  // const { pathname } = useLocation();

  // const isErrorPage = pathname === "/error";

  const { currentMenuTree, isPending } = useGetCurrentMenu();

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        marginBottom: "1.28rem",
        fontSize: "1.1rem",
        color: "grey.300",
      }}
    >
      <StyledBreadcrumb underline="hover" to="/">
        <HomeIcon sx={{ marginRight: 0.5 }} fontSize="inherit" />
        Home
      </StyledBreadcrumb>

      {isPending
        ? new Array(2).fill(null).map((_, idx) => (
            <Skeleton
              key={idx}
              variant="text"
              animation="pulse"
              sx={{
                display: "flex",
                alignItems: "center",
                width: "13rem",
                maxWidth: "13rem",
              }}
            />
          ))
        : currentMenuTree?.map(({ label, menuUrl, id }, idx) => {
            if (currentMenuTree.length - 1 === idx) {
              return (
                <Typography
                  key={`${label}-${idx}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1.1rem",
                    maxWidth: "13rem",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    transition: "all 0.3s ease-in-out;",

                    "&:hover": {
                      maxWidth: "25rem !important",
                    },
                  }}
                >
                  {label}
                  {isNullOrEmpty(id) ? "" : `[${id}]`}
                </Typography>
              );
            }
            return (
              <StyledBreadcrumb
                key={`${label}-${idx}`}
                underline="hover"
                href={menuUrl ?? "#"}
              >
                {label}
              </StyledBreadcrumb>
            );
          })}
    </Breadcrumbs>
  );
});
BreadCrumbArea.displayName = "BreadCrumbArea";

export default BreadCrumbArea;
