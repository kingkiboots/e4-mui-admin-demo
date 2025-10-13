import Grid, { type GridProps } from "@mui/material/Grid";

import { styled } from "@mui/material/styles";

const Flexbox = styled(Grid, {
  label: "row",
})({
  marginRight: "-1.2rem",
  marginLeft: "-1.2rem",
  width: "100%",
});

interface RowProps extends Omit<GridProps, "display"> {}
export const Row: React.FC<RowProps> = (props) => {
  return <Flexbox container {...props} />;
};
