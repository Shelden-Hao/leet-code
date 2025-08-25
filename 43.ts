/**
 * 43. 字符串相乘
 * https://leetcode.cn/problems/multiply-strings/description/
 * @param num1 第一个数
 * @param num2 第二个数
 * @description 注意两个规律：
 * 1. 两个数的乘积最长为两数长度之和，最短是两个数字之和减一。所以可以初始化一个结果数组。
 * 2. 两个字符串索引和结果索引的关系规律：i + j + i 刚好为结果的索引
 */
function multiply(num1: string, num2: string): string {
    const len1 = num1.length
    const len2 = num2.length
    // 两个数的乘积最长为两数长度之和，最短是两个数字之和减一
    const res: number[] = new Array(len1 + len2).fill(0)

    // 不进位，只求和
    for (let i = len1 - 1; i >= 0; i--) {
        const n1 = Number(num1[i])
        for (let j = len2 - 1; j >= 0; j--) {
            const n2 = Number(num2[j])
            // 相乘并加上进位（当前位的总和）
            // i + j + i 刚好为结果的索引
            const sum = n1 * n2 + res[i + j + 1]
            // 当前位
            res[i + j + 1] = sum % 10
            // 前一位
            res[i + j] += Math.floor(sum / 10)
        }
    }

    // 转为字符串并除去前导零
    while (res.length > 1 && res[0] === 0) {
        res.shift()
    }
    return res.join('');
};
