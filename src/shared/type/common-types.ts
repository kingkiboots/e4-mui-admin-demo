export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends (infer ElementType)[] ? ElementType : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ArgumentTypes<F extends (...args: any) => unknown> = F extends (
  ...args: infer A
) => // eslint-disable-next-line @typescript-eslint/no-explicit-any
any
  ? A
  : never;
