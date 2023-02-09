export type ConditionalArray<U, T extends string | Array<string>> = T extends string ? U : U[];

