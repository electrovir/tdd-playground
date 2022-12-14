import {describe, it} from 'mocha';
import {assertOutput} from '../../test-helpers/assert-function-output';
import {toJadenCase} from './jaden-casing-strings';

describe(toJadenCase.name, () => {
    it('should pass test cases', () => {
        type TestCase = {
            input: string;
            expect: string;
        };

        const testCases: TestCase[] = [
            {
                input: "How can mirrors be real if our eyes aren't real",
                expect: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            },
            {
                input: '',
                expect: '',
            },
            {
                input: 'dO yOu LiKe PoTaToEs',
                expect: 'Do You Like Potatoes',
            },
        ];

        testCases.forEach((testCase) => {
            assertOutput(toJadenCase, testCase.expect, testCase.input);
        });
    });
});
