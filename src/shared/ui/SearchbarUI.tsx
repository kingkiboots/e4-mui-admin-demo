import MUIPaper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Row } from "./RowUI";
import Grid, { type GridBaseProps } from "@mui/material/Grid";
import type { ChangeEvent } from "react";

const SearchContent = styled(MUIPaper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  mb: theme.spacing(2),
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  position: "relative",
  borderRadius: "4px",
  border: `2px solid ${theme.palette.grey[50]}`,
}));

interface SearchbarProps {
  //   inputsDef: InputsDefProps[];
  searchBarSize?: GridBaseProps["size"];
  onChange: (e: ChangeEvent) => void;
  //   buttonsDef?: SearchButtonsDefProps;
}
export const Searchbar = ({ searchBarSize = 10 }: SearchbarProps) => {
  return (
    <SearchContent elevation={0}>
      <Row>
        <Grid container>
          <Grid size={searchBarSize}></Grid>
          <Grid
            size={12 - Number(searchBarSize)}
            sx={{ textAlign: "right" }}
          ></Grid>
        </Grid>
      </Row>
    </SearchContent>
  );
};
