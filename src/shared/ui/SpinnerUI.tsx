import Box from "@mui/material/Box";
import { useLoadingIsLoading } from "../store/LoadingStateStore";
import CircularProgress from "@mui/material/CircularProgress";

export const SpinnerWrap = () => {
  const isLoading = useLoadingIsLoading();

  if (!isLoading) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        position: "fixed",
        width: "100%",
        height: "100%",
        opacity: "0.7",
        zIndex: "9999",

        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <CircularProgress color="primary" size="4rem" />
    </Box>
  );
};
