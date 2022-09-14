import {describe, it} from 'mocha';
import {ParameterArrayOrSingleParameter} from '../../augments/type';
import {assertOutput} from '../../test-helpers/assert-function-output';
import {baseChallenge} from './base-challenge';

describe(baseChallenge.name, () => {
    it('should pass test cases', () => {
        type TestCase = {
            input: ParameterArrayOrSingleParameter<typeof baseChallenge>;
            expect: ReturnType<typeof baseChallenge>;
        };

        const testCases: TestCase[] = [
            {
                input: undefined,
                expect: undefined,
            },
        ];

        testCases.forEach((testCase) => {
            assertOutput(baseChallenge, testCase.expect, testCase.input);
        });
    });
});
