import {describe, it} from 'mocha';
import {assertOutput} from '../../test-helpers/assert-function-output';
import {isPerfectSquare} from './perfect-square';

describe(isPerfectSquare.name, () => {
    it('should pass test cases', () => {
        type TestCase = {
            input: number;
            expect: boolean;
        };

        const testCases: TestCase[] = [
            {
                input: -1,
                expect: false,
            },
            {
                input: 0,
                expect: true,
            },
            {
                input: 3,
                expect: false,
            },
            {
                input: 4,
                expect: true,
            },
            {
                input: 25,
                expect: true,
            },
            {
                input: 26,
                expect: false,
            },
        ];

        testCases.forEach((testCase) => {
            assertOutput(isPerfectSquare, testCase.expect, testCase.input);
        });
    });
});
