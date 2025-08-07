/**
 * 20. 有效的括号
 * @param s 原字符串
 * @description
 * 1. 初始化栈，用于存放左括号。
 * 2. 遍历字符串：
 *      - 如果是左括号 (、[、{，就压入栈中。
 *      - 如果是右括号 )、]、}：
 *          - 栈为空：说明没有左括号与之匹配，直接返回 false。
 *          - 弹出栈顶元素，检查是否匹配当前右括号，不匹配也返回 false。
 * 3. 最后检查栈是否为空：
 *      - 空：说明所有括号都匹配，返回 true。
 *      - 不空：说明还有未匹配的左括号，返回 false。
 */
function isValid(s: string): boolean {
    const stack: string[] = []
    const map: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false
            }
        }
    }
    return stack.length === 0
};
