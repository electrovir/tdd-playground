import {assert} from 'chai';
import {describe, it} from 'mocha';
import {assertOutput} from './assert-function-output';

describe(assertOutput.name, () => {
    function singleArgFunction(input: number): number {
        return input + 1;
    }

    function multiArgFunction(input1: number, input2: number): number {
        return input1 + input2;
    }

    async function promisedResultFunction(input1: number): Promise<number> {
        return Promise.resolve(input1 + 1);
    }

    it('should pass when only a single argument is needed', () => {
        const input = Math.random();
        const expectedResult = singleArgFunction(input);

        assertOutput(singleArgFunction, expectedResult, input);
    });

    it('should not create a promise when the function is not async', () => {
        const input = Math.random();
        const expectedResult = singleArgFunction(input);

        const result: void = assertOutput(singleArgFunction, expectedResult, input);
    });

    it('should create a promise when the function is async', () => {
        const input = Math.random();
        const expectedResult = singleArgFunction(input);

        const result: Promise<void> = assertOutput(promisedResultFunction, expectedResult, input);
    });

    it('should fail when multiple arguments are needed but not provided', () => {
        const input1 = Math.random();
        const input2 = Math.random();
        const expectedResult = multiArgFunction(input1, input2);

        let error: unknown;
        try {
            // missing arguments
            // @ts-expect-error
            assertOutput(multiArgFunction, expectedResult, input1);
        } catch (thrownError) {
            error = thrownError;
        }
        assert.isDefined(error);
    });

    it('should pass when multiple arguments are used', () => {
        const input1 = Math.random();
        const input2 = Math.random();
        const expectedResult = multiArgFunction(input1, input2);

        assertOutput(multiArgFunction, expectedResult, input1, input2);
    });

    it('should pass when the result is a Promise', async () => {
        const input = Math.random();
        const expectedOutput = input + 1;

        await assertOutput(promisedResultFunction, expectedOutput, input);
    });
});
