import { styled } from "@mui/material/styles";
import Box, { type BoxProps } from "@mui/material/Box";
import { UI_DRAWER_WIDTH } from "../const";

interface PageContentWrapperProps extends BoxProps {
  isDrawerOpen: boolean;
}
export const PageContentWrapper = styled(Box, {
  label: "page-content-wrapper",
  shouldForwardProp: (prop) => prop !== "isDrawerOpen",
})<PageContentWrapperProps>(({ theme }) => ({
  flex: 1,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  marginLeft: `-${UI_DRAWER_WIDTH}`,
  variants: [
    {
      props: ({ isDrawerOpen }) => isDrawerOpen,
      style: {
        width: `calc(100% - ${UI_DRAWER_WIDTH})`,
        marginLeft: 0,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));
