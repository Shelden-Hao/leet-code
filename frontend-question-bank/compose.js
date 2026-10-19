/**
 * 手写组合式函数 compose
 * @param fns
 * @return {function(...[*]): *|*[]}
 */
function compose(...fns) {
    const length = fns.length
    for (let i = 0; i < length; i++) {
        if (typeof fns[i] !== 'function') {
            throw new TypeError('expected arguments are functions')
        }
    }

    function _compose(...args) {
        let index = 0
        let result = length ? fns[index].apply(this, args) : args
        while (++index < length) {
            result = fns[index].call(this, result)
        }
        return result
    }

    return _compose
}

function double(m) {
    return m * 2
}

function square(n) {
    return n ** 2
}

const composeFn = compose(double, square)
console.log(composeFn(2))
