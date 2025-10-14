import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { memo, useState } from "react";
import MoreIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { Icon } from "@/shared/ui/IconUI";

const settings = [
  {
    id: "chgPwd",
    label: "비밀번호 변경",
    icon: "LockOutlined",
  },
  {
    id: "logout",
    label: "로그아웃",
    icon: "LogoutOutlined",
  },
];

const Header = memo(
  ({
    isDrawerOpen,
    onClickToggleDrawer,
  }: {
    isDrawerOpen: boolean;
    onClickToggleDrawer: () => void;
  }) => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
      <AppBar
        position="static"
        className="page-header"
        role="banner"
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          height: (theme) => theme.spacing(8),
          boxShadow: "0px 0px 28px 0px rgba(86, 61, 124, 0.13)",
        }}
      >
        <Toolbar
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
              padding: (theme) => `0 ${theme.spacing(4)}`,
            },
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={onClickToggleDrawer}
            sx={{
              color: (theme) =>
                isDrawerOpen
                  ? theme.palette.grey[300]
                  : theme.palette.background.default,
              borderRadius: "4px",
              backgroundColor: (theme) =>
                isDrawerOpen ? undefined : theme.palette.background.dark,

              "&:hover": {
                backgroundColor: () => (isDrawerOpen ? undefined : "#404040"),
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              color: "#000",
              marginLeft: "auto",
            }}
          >
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                color: (theme) => theme.palette.grey[500],
                fontWeight: 500,
                fontSize: "1.4rem",
              }}
            >
              <Avatar
                sx={{
                  display: "inline-flex",
                  width: (theme) => theme.spacing(4),
                  height: (theme) => theme.spacing(4),
                }}
              />
              {"홍*동님 환영합니다."}
            </Typography>

            <Box>
              <Tooltip title="Open settings">
                <IconButton
                  size="medium"
                  aria-label="display more actions"
                  onClick={handleOpenUserMenu}
                  sx={{
                    color: (theme) => theme.palette.grey[400],
                    marginLeft: (theme) => theme.spacing(1),
                    padding: 0,
                    minWidth: "5rem",
                    textAlign: "center",
                    verticalAlign: "center",
                  }}
                >
                  <MoreIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ marginTop: "5rem" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(({ id, label, icon }) => (
                  <MenuItem
                    key={id}
                    onClick={handleCloseUserMenu}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      textAlign: "center",
                      fontSize: "1.4rem",
                      fontWeight: 400,

                      width: "16rem",
                      color: (theme) => theme.palette.text.default,
                      padding: (theme) =>
                        `${theme.spacing(2)} ${theme.spacing(1)}`,

                      "&:hover": {
                        color: (theme) => theme.palette.primary.dark,
                        fontWeight: 500,
                      },
                    }}
                  >
                    <Typography fontSize="inherit">{label}</Typography>
                    <Icon name={icon} fontSize="small" />
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
);

Header.displayName = "Header";
export default Header;
