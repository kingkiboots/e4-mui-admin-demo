import Box, { type BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Flexbox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  mr: "-1.2rem",
  ml: "-1.2rem",
  width: "100%",
});

interface RowProps extends Omit<BoxProps, "display"> {}
export const Row: React.FC<RowProps> = (props) => {
  return <Flexbox {...props} />;
};
