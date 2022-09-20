import {describe, it} from 'mocha';
import {ParameterArrayOrSingleParameter} from '../../augments/type';
import {assertOutput} from '../../test-helpers/assert-function-output';
import {arrayDiff} from './2022-09-20-array-diff';

describe(arrayDiff.name, () => {
    it('should pass test cases', () => {
        type TestCase = {
            input: ParameterArrayOrSingleParameter<typeof arrayDiff>;
            expect: ReturnType<typeof arrayDiff>;
        };

        const testCases: TestCase[] = [
            {
                input: [
                    [],
                    [
                        4,
                        5,
                    ],
                ],
                expect: [],
            },
            {
                input: [
                    [
                        3,
                        4,
                    ],
                    [3],
                ],
                expect: [4],
            },
            {
                input: [
                    [
                        1,
                        8,
                        2,
                    ],
                    [],
                ],
                expect: [
                    1,
                    8,
                    2,
                ],
            },
            {
                input: [
                    [
                        1,
                        2,
                        3,
                    ],
                    [
                        1,
                        2,
                    ],
                ],
                expect: [3],
            },
        ];

        testCases.forEach((testCase) => {
            assertOutput(arrayDiff, testCase.expect, ...testCase.input);
        });
    });
});
