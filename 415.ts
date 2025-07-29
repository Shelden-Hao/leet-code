/**
 * 415. 字符串相加
 * @param num1 第一个字符串
 * @param num2 第二个字符串
 * @description 大整数相加 - 模拟竖式加法，
 * 最好使用双指针，如果转为数组操作非常容易超时或者内存溢出
 */
function addStrings(num1: string, num2: string): string {
    let i = num1.length - 1
    let j = num2.length - 1
    let res = ''
    let carry = 0

    while (i >= 0 || j >= 0 || carry > 0) {
        const n1 = i >= 0 ? parseInt(num1[i]) : 0
        const n2 = j >= 0 ? parseInt(num2[j]) : 0
        const sum  = n1 + n2 + carry
        // res 字符串拼接 顺序一定不能错
        res = (sum % 10) + res
        carry = Math.floor(sum / 10)
        i--
        j--
    }
    return res
};

