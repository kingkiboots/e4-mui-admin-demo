/**
 * 푸쉬 목록 조회 파라미터
 */
export type PushMsgListSearchParams = {
  serviceCd: string /* UMS 서비스코드 */;
  seq: string /* 푸시 일련번호 */;
};

/**
 * 푸쉬 데이터
 */
export type PushMsgData = {
  serviceCd: string /* UMS 서비스코드 */;
  seq: string /* 푸시 일련번호 */;
  name: string /* 푸쉬 제목 */;
  content: string /* 푸쉬 내용 */;
  url: string /* 푸쉬 URL */;
  useYn: string /* 사용 여부 */;
};

/**
 * 푸쉬 목록 데이터
 */
export type PushMsgList = PushMsgData[];

/**
 * 푸쉬 상세 데이터
 */
export type PushMsgDetailData = {
  serviceCd?: string /* UMS 서비스코드 */;
  seq?: string /* 푸시 일련번호 */;
  name?: string /* 푸쉬 제목 */;
  content?: string /* 푸쉬 내용 */;
  url?: string /* 푸쉬 URL */;
  useYn?: string /* 사용 여부 */;
};

/**
 * 푸쉬 데이터 삭제 파라미터
 */
export type PushMsgDeleteParams = {
  serviceCd: string /* UMS 서비스코드 */;
};
