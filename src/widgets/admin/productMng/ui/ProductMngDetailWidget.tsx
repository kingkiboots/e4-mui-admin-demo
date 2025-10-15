import { Col } from "@/shared/ui/ColUI";
import { Detail } from "@/shared/ui/DetailUI";

export const ProductMngDetailWidget = () => {
  return (
    <Detail
      key={"product-mng-detail-info"}
      title="메시지 목록"
      information="hello"
    >
      <Col size={3}> hello 1</Col> <Col size={3}> hello 2</Col>
      <Col size={3}> hello 3</Col> <Col size={3}> hello 4</Col>
    </Detail>
  );
};
