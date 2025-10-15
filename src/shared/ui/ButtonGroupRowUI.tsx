import { type PropsWithChildren } from "react";
import { ButtonGroup } from "./ButtonGroupUI";
import { Col } from "./ColUI";
import { Row } from "./RowUI";

interface ButtonGroupRowProps extends PropsWithChildren {}
export const ButtonGroupRow = ({ children }: ButtonGroupRowProps) => {
  return (
    <Row marginBottom="0.5rem">
      <Col size={12} textAlign="right">
        <ButtonGroup>{children}</ButtonGroup>
      </Col>
    </Row>
  );
};
