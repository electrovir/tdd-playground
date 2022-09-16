import {describe, it} from 'mocha';
import {ParameterArrayOrSingleParameter} from '../../augments/type';
import {assertOutput} from '../../test-helpers/assert-function-output';
import {whoLikesIt} from './2022-09-16-who-likes-it';

describe(whoLikesIt.name, () => {
    it('should pass test cases', () => {
        type TestCase = {
            input: ParameterArrayOrSingleParameter<typeof whoLikesIt>;
            expect: ReturnType<typeof whoLikesIt>;
        };

        const testCases: TestCase[] = [
            {
                input: [],
                expect: 'no one likes this',
            },
            {
                input: ['Peter'],
                expect: 'Peter likes this',
            },
            {
                input: [
                    'Jacob',
                    'Alex',
                ],
                expect: 'Jacob and Alex like this',
            },
            {
                input: [
                    'Max',
                    'John',
                    'Mark',
                ],
                expect: 'Max, John and Mark like this',
            },
            {
                input: [
                    'Alex',
                    'Jacob',
                    'Mark',
                    'Max',
                ],
                expect: 'Alex, Jacob and 2 others like this',
            },
        ];

        testCases.forEach((testCase) => {
            assertOutput(whoLikesIt, testCase.expect, testCase.input);
        });
    });
});
