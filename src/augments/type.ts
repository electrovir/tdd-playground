export type ParameterArrayOrSingleParameter<FunctionTypeGeneric extends (...args: any) => any> =
    Parameters<FunctionTypeGeneric> extends [any]
        ? Parameters<FunctionTypeGeneric>[0]
        : Parameters<FunctionTypeGeneric>;
