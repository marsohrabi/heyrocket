declare module "ReduxTypings" {
    export type ReducerState = StateType<
        ReturnType<typeof import("../reducers").default>
    >;
}
