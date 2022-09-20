import {isPromiseLike} from 'augment-vir';
import {assert} from 'chai';

export function assertOutput<FunctionToCallGeneric extends (...args: any[]) => any | Promise<any>>(
    functionToCall: FunctionToCallGeneric,
    expectedOutput: Awaited<ReturnType<typeof functionToCall>>,
    ...inputs: Parameters<typeof functionToCall>
): ReturnType<typeof functionToCall> extends Promise<any> ? Promise<void> : void {
    const result = functionToCall(...inputs);

    const failureMessage = `${
        functionToCall.name
    } output failed to match expectation with input: ${inputs
        .map((entry) => JSON.stringify(entry))
        .join(', ')}`;

    if (isPromiseLike(result)) {
        return new Promise<void>(async (resolve, reject) => {
            try {
                assert.deepStrictEqual(await result, expectedOutput, failureMessage);
                resolve();
            } catch (error) {
                reject(error);
            }
        }) as ReturnType<typeof functionToCall> extends Promise<any> ? Promise<void> : void;
    } else {
        assert.deepStrictEqual(result, expectedOutput, failureMessage);
        return undefined as ReturnType<typeof functionToCall> extends Promise<any>
            ? Promise<void>
            : void;
    }
}
