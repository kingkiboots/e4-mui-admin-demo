export type PushMsgListSearchData = {
  serviceCd: string;
  seq: string;
};

export type PushMsgData = {
  serviceCd: string;
  seq: string;
  name: string;
  content: string;
  url: string;
  useYn: string;
};

export type PushMsgList = PushMsgData[];

export type PushMsgDetailData = {
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
