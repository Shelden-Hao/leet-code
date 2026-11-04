/**
 * 手写 Promise.allSettled
 * @param promises
 * @return {Promise<unknown>}
 */
Promise.myAllSettled = function (promises) {
    return new Promise(resolve =>  {
        const result = []
        let count = 0
        let index = 0
        for (let promise of promises) {
            let currentIndex= index++
            Promise.resolve(promise).then((value) => {
                result[currentIndex] = {status: 'fulfilled', value: value}
            }, (reason) => {
                result[currentIndex] = {status: 'rejected', reason: reason}
            }).finally(() => {
                count++
                if (count === index) {
                    resolve(result)
                }
            })
        }
        if (index === 0) resolve([])
    })
};

// const p1 = Promise.resolve(10);
// const p2 = Promise.reject('err');
// const p3 = new Promise(resolve => setTimeout(() => resolve(30), 500));
//
// Promise.myAllSettled([p1, p2, p3]).then(res => {
//     console.log(res);
//     // [
//     //   { status: 'fulfilled', value: 10 },
//     //   { status: 'rejected', reason: 'err' },
//     //   { status: 'fulfilled', value: 30 }
//     // ]
// });
//
// Promise.myAllSettled(new Set([p1, p2])).then(res => console.log(res));
