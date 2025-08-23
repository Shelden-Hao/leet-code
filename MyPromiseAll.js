/**
 * 手写 Promise.all
 * @param promises Promise 可迭代对象
 * @return {Promise<unknown>} 返回一个 Promise
 */
Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
        // 同时表示迭代次数和下标，因为当前下标一定比迭代次数少一
        let count = 0
        // fulfilled状态的次数
        let fulfilledCount = 0
        // 最终fulfilled 的结果
        const result = []
        // Promise.all 中接收迭代对象，length、size 无法准确判断
        for (let promise of promises) {
            const index = count
            count++
            // 不论传的什么值，统一包包裹为 Promise.resolve() 对象
            Promise.resolve(promise).then((data) => {
                result[index] = data
                fulfilledCount++
                // 由于 Promise.all 特性，只要有一个 rejected 整体就是 rejected。
                // 所以只有所有都 fulfilled 才会 resolve(result) ，否则都 rejected ，结果仍正确
                if (fulfilledCount === count) {
                    resolve(result)
                }
            }, reject)
        }
        if (count === 0) {
            resolve(result)
        }
    })
};

Promise.myAll([1, 2, Promise.reject(3)]).then((values) => {
    console.log('fulfilled', values)
}, (errors) => {
    console.log('rejected', errors)
})
