import { styled } from "@mui/material/styles";
import Stack, { type StackProps } from "@mui/material/Stack";
import { UI_DRAWER_WIDTH } from "../const";

interface PageContentWrapperProps extends StackProps {
  isDrawerOpen: boolean;
}
export const PageContentWrapper = styled(Stack, {
  label: "page-content-wrapper",
  shouldForwardProp: (prop) => prop !== "isDrawerOpen",
})<PageContentWrapperProps>(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.background.default,
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
