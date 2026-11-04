/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let arr = []
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            let temp1 = arr.pop()
            let temp2 = arr.pop()
            let res = Number(temp2) + Number(temp1)
            arr.push(res)
            continue
        }
        if (tokens[i] === '-') {
            let temp1 = arr.pop()
            let temp2 = arr.pop()
            let res = Number(temp2) - Number(temp1)
            arr.push(res)
            continue
        }
        if (tokens[i] === '*') {
            let temp1 = arr.pop()
            let temp2 = arr.pop()
            let res = Number(temp2) * Number(temp1)
            arr.push(res)
            continue
        }
        if (tokens[i] === '/') {
            let temp1 = arr.pop()
            let temp2 = arr.pop()
            let res = Number(temp2) / Number(temp1) > 0 ? Math.floor(Number(temp2) / Number(temp1)) : Math.ceil(Number(temp2) / Number(temp1))
            arr.push(res)
            continue
        }
        arr.push(tokens[i])
    }
    return arr[0]
};