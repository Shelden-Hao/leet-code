function createCalc(initial = 0) {
    let value = initial
    const api = {
        plus(num) {
           value += num
            return api
        },
        minus(num) {
            value -= num
            return api
        },
        result() {
            return value
        }
    }
    return api
}

// 链式调用
const calc = createCalc(10)
console.log(calc.plus(5).minus(3).result())
// 输出 12

// 解构使用
const { plus, minus, result } = createCalc(20)
plus(10)
minus(5)
console.log(result())
// 输出 25
