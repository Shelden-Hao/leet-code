/**
 * 手写 Promise.race()
 * @param promises
 * @return {Promise<unknown>}
 */
Promise.myRace = function (promises) {
    return new Promise((resolve, reject) => {
        for (let promise of promises) {
            // 用 Promise.resolve 包装，确保即便是普通值也能处理
            Promise.resolve(promise).then(
                value => resolve(value), // 谁先成功就返回谁
                reason => reject(reason) // 谁先失败就返回谁
            )
        }
    })
};

// const p1 = new Promise(resolve => setTimeout(() => resolve('p1 done'), 1000));
// const p2 = new Promise(resolve => setTimeout(() => resolve('p2 done'), 500));
// const p3 = Promise.resolve('p3 immediate');
//
// Promise.myRace([p1, p2, p3]).then(
//     res => console.log('✅ resolved:', res),
//     err => console.log('❌ rejected:', err)
// );

// 因为 p3 是一个立即完成的 Promise，它最先“比赛”完成。
// 输出: ✅ resolved: p3 immediate
