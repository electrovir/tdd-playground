// https://www.codewars.com/kata/5266876b8f4bf2da9b000362
export function whoLikesIt(inputs: string[]): string {
    return `${determineList(inputs)} ${getSuffix(inputs)}`;
}

function determineList(inputs: string[]): string {
    if (inputs.length > 0 && inputs.length < 3) {
        return inputs.join(' and ');
    } else if (inputs.length >= 3) {
        const trailing = inputs.length === 3 ? inputs[2] : `${inputs.length - 2} others`;

        return [
            inputs.slice(0, 2).join(', '),
            trailing,
        ].join(' and ');
    } else {
        return 'no one';
    }
}

function getSuffix(inputs: string[]): string {
    if (inputs.length < 2) {
        return 'likes this';
    } else {
        return 'like this';
    }
}
