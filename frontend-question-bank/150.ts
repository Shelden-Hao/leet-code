/**
 * 逆波兰表达式求职
 * @param tokens 字符数组
 * @returns 求值结果
 */
function evalRPN(tokens: string[]): number {
    const stack:number[] = []
    // 直接遍历所有的tokens
    for (const token of tokens) {
        if (token === '+') {
            const num2 = stack.pop()!
            const num1 = stack.pop()!
            const res = num1 + num2
            stack.push(res)
        } else if (token === '-') {
            const num2 = stack.pop()!
            const num1 = stack.pop()!
            const res = num1 - num2
            stack.push(res)
        } else if (token === '*') {
            const num2 = stack.pop()!
            const num1 = stack.pop()!
            const res = num1 * num2
            stack.push(res)
        } else if (token === '/') {
            const num2 = stack.pop()!;
            const num1 = stack.pop()!;
            // trunc 和 floor 的区别：
            // floor向下取整：floor(3/2)=1; floor(-3/2)=-2
            // trunc将数字的小数部分去掉，只保留整数部分：floor(3/2)=1; floor(-3/2)=-1
            const res = Math.trunc(num1 / num2);
            stack.push(res);
        } else {
            // 如果不是符号则作为数据加入栈中
            stack.push(Number(token))
        }
    }
    return stack.pop()!
};