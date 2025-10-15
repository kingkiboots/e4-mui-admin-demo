import { Col } from "@/shared/ui/ColUI";
import { Detail } from "@/shared/ui/DetailUI";
import { memo } from "react";

const ProductMngDetailCompWidget = memo(() => {
  return (
    <Detail
      key={"product-mng-detail-info"}
      title="매체 정보"
      information="상품 전시 목록 생성 전 매체식별자가 해당 이벤트에 적합한지 반드시 확인해주세요"
    >
      <Col size={3}> hello 1</Col> <Col size={3}> hello 2</Col>
      <Col size={3}> hello 3</Col> <Col size={3}> hello 4</Col>
    </Detail>
  );
});

export default ProductMngDetailCompWidget;
