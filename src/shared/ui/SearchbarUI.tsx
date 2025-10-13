import MUIPaper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Row } from "./RowUI";

import {
  createContext,
  useContext,
  type ChangeEvent,
  type MouseEventHandler,
  type PropsWithChildren,
} from "react";
import { type ColProps } from "./ColUI";
import React from "react";
import { isNull, isNullOrEmpty } from "../lib/commonHelpers";
import { ButtonGroup, type ButtonGroupProps } from "./ButtonGroupUI";
import Grid from "@mui/material/Grid";

const SearchContent = styled(MUIPaper, {
  label: "search-content",
})(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  mb: theme.spacing(2),
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  position: "relative",
  borderRadius: "4px",
  border: `2px solid ${theme.palette.grey[100]}`,
}));

interface SearchbarContextValue {
  searchBarSize: ColProps["size"];
}

const SearchbarContext = createContext<SearchbarContextValue | null>(null);

interface SearchbarProps {
  // inputsDef: InputsDefProps[];
  inputsDef?: { name: string; value: string; type: string }[];
  searchBarSize?: ColProps["size"];
  onChange: (e: ChangeEvent) => void;
  // buttonsDef?: SearchButtonsDefProps;
  buttonsDef?: { search: MouseEventHandler<HTMLButtonElement> };
  children?: React.ReactNode;
}
type SearchbarSubComponents = {
  InputsArea: typeof InputsArea;
  ButtonsArea: typeof ButtonsArea;
};
export const Searchbar: React.FC<SearchbarProps> & SearchbarSubComponents = ({
  searchBarSize = 10,
  inputsDef,
  buttonsDef,
  children,
}) => {
  const { inputsArea, buttonsArea } = (() => {
    const childrenArray = React.Children.toArray(children);

    return {
      inputsArea: isNullOrEmpty(inputsDef)
        ? (childrenArray.find(
            (child) =>
              React.isValidElement(child) &&
              child.type.toString() === Searchbar.InputsArea.toString()
          ) as React.ReactElement<InputAreaProps> | undefined)
        : undefined,
      buttonsArea: isNullOrEmpty(buttonsDef)
        ? (childrenArray.find(
            (child) =>
              React.isValidElement(child) &&
              child.type.toString() === Searchbar.ButtonsArea.toString()
          ) as React.ReactElement<ButtonsAreaProps> | undefined)
        : undefined,
    };
  })();

  return (
    <SearchbarContext.Provider value={{ searchBarSize }}>
      <SearchContent elevation={0}>
        <Grid container>
          {/* input */}
          {isNull(inputsArea)
            ? inputsDef?.map(() => <InputsArea></InputsArea>)
            : inputsArea}
          {/* button */}
          {/* {isNull(buttonsArea) ? <ButtonsArea></ButtonsArea> : buttonsArea} */}
          {buttonsArea}
        </Grid>
      </SearchContent>
    </SearchbarContext.Provider>
  );
};

interface InputAreaProps extends PropsWithChildren {}
const InputsArea = ({ children }: InputAreaProps) => {
  const context = useContext(SearchbarContext);
  if (!context)
    throw new Error("SearchbarInputs must be used within Searchbar");

  return (
    <Grid size={context.searchBarSize}>
      <Row>{children}</Row>
    </Grid>
  );
};

interface ButtonsAreaProps {
  children: ButtonGroupProps["children"];
}
const ButtonsArea = ({ children }: ButtonsAreaProps) => {
  const context = useContext(SearchbarContext);
  if (!context)
    throw new Error("SearchbarButtons must be used within Searchbar");
  return (
    <Grid size={12 - Number(context.searchBarSize)} textAlign="right">
      <ButtonGroup>{children}</ButtonGroup>
    </Grid>
  );
};

Searchbar.InputsArea = InputsArea;
Searchbar.ButtonsArea = ButtonsArea;
