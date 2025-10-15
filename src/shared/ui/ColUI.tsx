import Grid, { type GridProps } from "@mui/material/Grid";

import { styled } from "@mui/material/styles";

const Cell = styled(Grid, {
  label: "col",
})({
  position: "relative",
  paddingRight: "1.2rem",
  paddingLeft: "1.2rem",
});

export interface ColProps extends Omit<GridProps, "container" | "size"> {
  size: GridProps["size"];
}
export const Col: React.FC<ColProps> = (props) => {
  return <Cell {...props} />;
};
