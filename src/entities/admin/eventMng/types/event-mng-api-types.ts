export type EventMngListSearchData = {
  id: string;
  code: string;
};

export type EventMngData = {
    id : string
	name : string
    code : string
    difCode:string
    searchCode:string
    suName:string
    suSearchCode:string
    typeName:string
	stDt : string
	edDt : string
	useYn : string
	setdef : string
}

export type EventMngList = EventMngData[]