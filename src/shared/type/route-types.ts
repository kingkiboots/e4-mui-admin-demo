// prefix + path 합치기 (절대/상대 구분)
type Join<
  Base extends string,
  Path extends string,
  Absolute extends boolean = true
> = Absolute extends true
  ? Path extends `/${string}`
    ? `${Base}${Path}` // 절대경로
    : `${Base}/${Path}` // 기본적으로 앞에 /
  : Path; // 상대경로 유지

// 동적 파라미터 추출
type ExtractParams<T extends string> =
  T extends `${string}:${infer Param}/${infer Rest}`
    ? Param | ExtractParams<`/${Rest}`>
    : T extends `${string}:${infer Param}`
    ? Param
    : never;

type PathBuilder<Path extends string> = [ExtractParams<Path>] extends [never]
  ? Path // 파라미터 없으면 문자열
  : (params: Record<ExtractParams<Path>, string>) => string;

// 중첩 라우트 변환
export type NestedRoutes<
  Base extends string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Routes extends Record<string, any>,
  Absolute extends boolean = true
> = {
  [K in keyof Routes]: Routes[K] extends string
    ? PathBuilder<Join<Base, Routes[K], Absolute>>
    : // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Routes[K] extends Record<string, any>
    ? NestedRoutes<
        Join<Base, Extract<keyof Routes[K], string>, Absolute>,
        Routes[K],
        Absolute
      >
    : never;
};
