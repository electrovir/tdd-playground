import {describe, it} from 'mocha';
import {ParameterArrayOrSingleParameter} from '../../augments/type';
import {assertOutput} from '../../test-helpers/assert-function-output';
import {oddInt} from './2022-09-14-odd-int';

describe(oddInt.name, () => {
    it('should pass test cases', () => {
        type TestCase = {
            input: ParameterArrayOrSingleParameter<typeof oddInt>;
            expect: ReturnType<typeof oddInt>;
        };

        const testCases: TestCase[] = [
            {
                // prettier-multiline-arrays-next-threshold: 50
                input: [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5],
                expect: 5,
            },
            {
                // prettier-multiline-arrays-next-threshold: 50
                input: [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5],
                expect: -1,
            },
            {
                // prettier-multiline-arrays-next-threshold: 50
                input: [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5],
                expect: 5,
            },
            {
                input: [10],
                expect: 10,
            },
            {
                // prettier-multiline-arrays-next-threshold: 50
                input: [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1],
                expect: 10,
            },
            {
                // prettier-multiline-arrays-next-threshold: 50
                input: [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10],
                expect: 1,
            },
        ];

        testCases.forEach((testCase) => {
            assertOutput(oddInt, testCase.expect, testCase.input);
        });
    });
});
