import {getObjectTypedKeys} from 'augment-vir';

// https://www.codewars.com/kata/LINK_HERE
export function oddInt(input: number[]): number | undefined {
    const instanceCounts: Record<number, number> = {};
    input.forEach((entry) => {
        if (entry in instanceCounts) {
            instanceCounts[entry]++;
        } else {
            instanceCounts[entry] = 1;
        }
    });

    const oddNumber = getObjectTypedKeys(instanceCounts).find((key) => {
        const count = instanceCounts[key] ?? 0;
        return count % 2;
    });

    if (oddNumber == undefined) {
        return undefined;
    } else {
        return Number(oddNumber);
    }
}
