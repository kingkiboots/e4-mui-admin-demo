// prefix + path 합치기
type Join<Base extends string, Path extends string> = Path extends `/${string}`
  ? `${Base}${Path}`
  : `${Base}/${Path}`;

// 동적 파라미터 추출
type ExtractParams<T extends string> =
  T extends `${string}:${infer Param}/${infer Rest}`
    ? Param | ExtractParams<`/${Rest}`>
    : T extends `${string}:${infer Param}`
    ? Param
    : never;

type PathBuilder<Path extends string> = [ExtractParams<Path>] extends [never]
  ? Path // 파라미터 없으면 그냥 문자열
  : (params: Record<ExtractParams<Path>, string>) => string;

// 중첩 라우트 변환
export type NestedRoutes<
  Base extends string,
  Routes extends Record<string, any>
> = {
  [K in keyof Routes]: Routes[K] extends string
    ? PathBuilder<Join<Base, Routes[K]>>
    : Routes[K] extends Record<string, any>
    ? NestedRoutes<Join<Base, Extract<keyof Routes[K], string>>, Routes[K]>
    : never;
};
