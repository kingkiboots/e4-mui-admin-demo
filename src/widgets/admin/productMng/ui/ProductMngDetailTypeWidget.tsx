import { Col } from "@/shared/ui/ColUI";
import { Detail } from "@/shared/ui/DetailUI";

export const ProductMngDetailTypeWidget = () => {
  return (
    <Detail
      key={"product-mng-detail-info"}
      title="분류 정보"
      information="분류 정보는 이벤트식별자, 매체식별자를 조회한 다음 선택이 가능합니다."
    >
      <Col size={3}> hello 1</Col> <Col size={3}> hello 2</Col>
      <Col size={3}> hello 3</Col> <Col size={3}> hello 4</Col>
    </Detail>
  );
};
