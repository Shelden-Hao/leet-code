/**
 * 165. 比较版本号
 * https://leetcode.cn/problems/compare-version-numbers/description/
 * @param version1
 * @param version2
 */
function compareVersion(version1: string, version2: string): number {
    const arr1 = version1.split('.').map(item => Number(item))
    const arr2 = version2.split('.').map(item => Number(item))

    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        if (arr1[i] === undefined) arr1[i] = 0
        if (arr2[i] === undefined) arr2[i] = 0
        if (arr1[i] < arr2[i]) {
            return -1
        }
        if (arr1[i] > arr2[i]) {
            return 1
        }
    }
    return 0
};
