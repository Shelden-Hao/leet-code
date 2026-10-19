/**
 * 手写组合函数
 * @param fns 多个函数
 * @return {function(...[*]): *|*[]} 组合后的一个函数
 */
function myCompose(...fns) {
    const length = fns.length
    for (let i = 0; i < length; i++) {
        if (typeof fns[i] !== 'function') {
            throw new TypeError('expected arguments are functions')
        }
    }

    function compose(...args) {
        let index = 0
        // js 中的函数只能返回一个结果，所以先获取第一个结果，供后续使用
        let result = length ? fns[index].apply(this, args) : args
        while (++index < length) {
            result = fns[index].call(this, result)
        }
        return result
    }

    return compose
}

function double(m) {
    return m * 2
}

function square(n) {
    return n ** 2
}

const composeFn = myCompose(double, square)
console.log(composeFn(2))
