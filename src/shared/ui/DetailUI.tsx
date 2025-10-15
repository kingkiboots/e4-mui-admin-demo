import { memo } from "react";
import { Panel, type PropsWithPanelProps } from "./PanelUI";
import { Row } from "./RowUI";

export const Detail = ({
  title,
  information,
  children
}: {
    title:string,
    information : string,
    children : any
}) => {
  return (
    <Panel
      title={<GridTitle title={title} />}
      information={information}
    >
      <Row>
        {children}
      </Row>
    </Panel>
  );
};

interface GridTitle extends Pick<PropsWithPanelProps, "title"> {
  rowCount?: number;
}

const GridTitle = memo<GridTitle>(({ title}) => {
  return (
    <>
      {title}
    </>
  );
});