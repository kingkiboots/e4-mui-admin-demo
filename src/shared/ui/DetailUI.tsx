import type { PropsWithChildren } from "react";
import { Panel, type PropsWithPanelProps } from "./PanelUI";
import { Row } from "./RowUI";

interface DetailProps extends PropsWithPanelProps, PropsWithChildren {}
export const Detail = ({ title, information, children }: DetailProps) => {
  return (
    <Panel title={title} information={information}>
      <Row>{children}</Row>
    </Panel>
  );
};
