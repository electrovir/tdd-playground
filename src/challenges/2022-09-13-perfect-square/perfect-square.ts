// https://www.codewars.com/kata/54c27a33fb7da0db0100040e
export function isPerfectSquare(input: number): boolean {
    return input >= 0 && String(Math.sqrt(input)).indexOf('.') === -1;
}
