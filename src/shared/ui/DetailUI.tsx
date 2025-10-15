import { Panel } from "./PanelUI";
import { Row } from "./RowUI";

export const Detail = ({
  title,
  information,
  children,
}: {
  title: string;
  information: string;
  children: any;
}) => {
  return (
    <Panel title={title} information={information}>
      <Row>{children}</Row>
    </Panel>
  );
};
