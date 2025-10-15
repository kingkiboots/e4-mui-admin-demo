export type ProductMngListSearchData = {
  serviceCd: string;
  seq: string;
};

export type ProductMngData = {
  eventId: string;
  mediaId: string;
  giftId: string;
  gifttName: string;
  brandId: string;
  brandName: string;
  useYn: string;
  saleEndDate: string;
  salePrice: string;
  saleDisAmt: string;
  img250: string;
  img500: string;
  giftTypeCd: string;
  giftSubTypeCd: string;
  subTypeNm: string;
  regStepDt: string;
  regStepId: string;
  updStepDt: string;
  updStepId: string;
};

export type ProductMngList = ProductMngData[];

export type ProductMngDetailData = {
  eventId?: string;
  mediaId?: string;
  giftId?: string;
  gifttName?: string;
  brandId?: string;
  brandName?: string;
  useYn?: string;
  saleEndDate?: string;
  salePrice?: string;
  saleDisAmt?: string;
  img250?: string;
  img500?: string;
  giftTypeCd?: string;
  giftSubTypeCd?: string;
  subTypeNm?: string;
  regStepDt?: string;
  regStepId?: string;
  updStepDt?: string;
  updStepId?: string;
};
