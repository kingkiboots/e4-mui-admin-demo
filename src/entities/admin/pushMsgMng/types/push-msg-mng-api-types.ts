export type PushMsgMngListSearchData = {
  serviceCd: string;
  seq: string;
};

export type PushMsgMngData = {
  serviceCd: string;
  seq: string;
  name: string;
  content: string;
  url: string;
  useYn: string;
};

export type PushMsgMngList = PushMsgMngData[];

export type PushMsgMngDetailData = {
  serviceCd?: string;
  seq?: string;
  name?: string;
  content?: string;
  url?: string;
  useYn?: string;
};

export type PushMsgDeleteParam = {
  serviceCd: string;
};
