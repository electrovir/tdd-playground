// https://www.codewars.com/kata/5390bac347d09b7da40006f6
export function toJadenCase(input: string): string {
    return input.toLowerCase().replace(/^(\w)|(\s\w)/g, (capturedGroup) => {
        return capturedGroup.toUpperCase();
    });
}
