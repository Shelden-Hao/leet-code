const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

/**
 * 实现一个模拟 Promise 的类
 */
class myPromise {
    /**
     * 构造函数
     * @param {Function} executor 执行器函数
     */
    constructor(executor) {
        // 初始化状态
        this.status = PENDING
        // 初始化 value 和 reason
        this.value = undefined
        this.reason = undefined
        // 初始化 Promise 敲定的函数数组和 Promise 被拒接的函数数组
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []

        // 敲定的回调
        const resolve = (value) => {
            if (this.status === PENDING) {
                // 更改状态更改值
                this.status = FULFILLED
                this.value = value
                // 执行所有成功的注册回调（简化版，暂时不考虑异步和返回值）
                this.onFulfilledCallbacks.forEach(callback => {
                    // 模拟微任务异步执行
                    setTimeout(() => callback(this.value), 0)
                })
            }
        }
        // 拒接的回调
        const reject = (reason) => {
            if (this.status === PENDING) {
                // 更改状态更改错误原因
                this.status = REJECTED
                this.reason = reason
                // 执行所有失败的注册回调（简化版，暂时不考虑异步和返回值）
                this.onRejectedCallbacks.forEach(callback => {
                    // 模拟微任务异步执行
                    setTimeout(() => callback(this.reason), 0)
                })
            }
        }
        try {
            // 执行 执行器函数
            executor(resolve, reject);
        } catch (error) {
            reject(error)
        }
    }

    then(onFulfilled, onRejected) {
        // 确保回调是函数，或者提供默认行为
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
        // 返回一个新的 Promise
        return new myPromise((resolve, reject) => {
            // 处理敲定
            const handleFulfilled = (value) => {
                try {
                    const result = onFulfilled(value);
                    // 简化版：直接用回调返回值 resolve 新 Promise，Promise/A+ 更复杂
                    resolve(result);
                } catch (error) {
                    reject(error)
                }
            }
            // 处理拒绝
            const handleRejected = (reason) => {
                try {
                    // 失败回调返回普通值时，新的 Promise 成功
                    const result = onRejected(reason);
                    resolve(result);
                } catch (error) {
                    // 失败回调抛出异常，新的 Promise 失败
                    reject(error)
                }
            }
            // 根据不同状态选择异步执行对应状态的回调
            if (this.status === FULFILLED) {
                // 如果已经成功，立即异步执行 handleFulfilled
                setTimeout(() => { handleFulfilled(this.value) }, 0)
            } else if (this.status === REJECTED) {
                // 如果已经失败，立即异步执行 handleRejected
                setTimeout(() => { handleRejected(this.reason) }, 0)
            } else {
                // 如果当前 Promise 仍在 pending，存储回调
                this.onFulfilledCallbacks.push(() => {
                    // 模拟微任务执行异步回调
                    setTimeout(() => { handleFulfilled(this.value) }, 0 )
                })
                this.onRejectedCallbacks.push(() => {
                    // 模拟微任务执行异步回调
                    setTimeout(() => { handleRejected(this.reason) }, 0 )
                })
            }
        })
    }
}
