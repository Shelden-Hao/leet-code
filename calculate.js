function calculate(expression) {
    // 去掉空格
    expression = expression.replace(/\s+/g, '')
    const nums = [] // 数字栈
    const ops = [] // 操作符栈
    // 定义操作符优先级
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    }
    // 计算栈顶两个数
    function applyOp() {
        const b = nums.pop()
        const a = nums.pop()
        const op = ops.pop()
        let res = 0
        switch (op) {
            case '+': res = a + b; break
            case '-': res = a - b; break
            case '*': res = a * b; break
            case '/': res = a / b; break
        }
        nums.push(res)
    }

    // 遍历表达式
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i]
        if (/\d/.test(char)) {
            // 处理数字(可能多位或者小数)
            let num = ''
            while (i < expression.length && /[\d.]/.test(expression[i])) {
                num += expression[i++]
            }
            i-- // 调整索引，因为外层循环也会增加i
            nums.push(parseFloat(num))
        } else if (char === '(') {
            ops.push(char)
        } else if (char === ')') {
            while (ops.length && ops[ops.length - 1] !== '(') {
                // 计算直到遇到左括号
                applyOp()
            }
            ops.pop() // 弹出左括号
        } else if ('+-*/'.includes(char)) {
            // 处理操作符
            while (ops.length && precedence[ops[ops.length - 1]] >= precedence[char]) {
                // 操作符栈顶的优先级高于或等于当前操作符，先计算
                applyOp()
            }
            ops.push(char)
        }
    }
    // 处理剩余操作符
    while (ops.length) applyOp()

    return nums.pop()
}

// ✅ 测试
// console.log(calculate("1 + 2 * (3 + 4)"));  // 15
// console.log(calculate("(2+3)*4-5/5"));      // 19
// console.log(calculate("3 + 4 * 2 / (1 - 5)")); // 1
