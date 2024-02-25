export function intersection(nums1: number[], nums2: number[]): number[] {
    const set1: Set<number> = new Set(nums1);
    const set2: Set<number> = new Set(nums2);

    const result: number[] = [];

    for (const num of set1) {
        if (set2.has(num)) {
            result.push(num);
        }
    }

    return result;
}

export function intersectionTwo(nums1: number[], nums2: number[]): number[] {
    const set1: Set<number> = new Set(nums1);
    const result: number[] = [];

    for (const num of set1) {
        const occurrencesInNums1 = nums1.filter(n => n === num).length;
        const occurrencesInNums2 = nums2.filter(n => n === num).length;

        const occurrences =
            occurrencesInNums1 < occurrencesInNums2 ?
                occurrencesInNums1 :
                occurrencesInNums2;

        for (let i = 0; i < occurrences; i++) {
            result.push(num);
        }
    }

    return result;
}
