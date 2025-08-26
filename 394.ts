/**
 * 394. 字符串解码
 * https://leetcode.cn/problems/decode-string/description/
 * @param s 原字符串
 * @description 模拟栈。遍历字符串，维护一个数字栈（用于重复字符串）和一个字符串栈（用于保存需要重复的字符串和拼接普通字符串）
 */
function decodeString(s: string): string {
    const numStack: number[] =[]
    const strStack: string[] = []
    let currentNum = 0, currentStr = ''
    for (let char of s) {
        if (!isNaN(Number(char))) {
            // 遇到数字（可能是多位），累积
            currentNum = currentNum * 10 + Number(char)
            // 除了数字之外每个判断最后一步都是操作字符串
        } else if (char === '[') {
            // 数字和之前暂存的字符串入栈，然后重置
            numStack.push(currentNum)
            // 暂存之前已经拼接好的字符串
            strStack.push(currentStr)
            currentNum = 0
            // 开始暂存需要重复的字符串
            currentStr = ''
        } else if (char === ']') {
            // 弹出栈顶
            const repeatTimes = numStack.pop()!
            const prevStr = strStack.pop()!
            currentStr = prevStr + currentStr.repeat(repeatTimes)
        } else {
            // 普通字符
            currentStr += char
        }
    }
    return currentStr
};

export {}
