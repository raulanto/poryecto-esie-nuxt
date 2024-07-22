export function sumArrays(array1: number[], array2: number[]): number[] {
    return array1.map((num, idx) => num + (array2[idx] || 0));
}