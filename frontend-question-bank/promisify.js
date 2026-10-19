/**
 * promisify - 将 node 风格 (err, ...results) 回调函数包装成返回 Promise 的函数
 * @param {Function} fn 原始函数，最后一个参数为回调 (err, ...results)
 * @returns {Function} 返回的函数保留 this 绑定（可作为对象方法使用）
 */
function promisify(fn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            fn.call(this, ...args, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }
}

// // 原始回调风格函数
// function readFileMock(path, cb) {
//   setTimeout(() => {
//     if (path === 'error') cb(new Error('file not found'));
//     else cb(null, 'file content');
//   }, 100);
// }
// // 转换成 promise 版
// const readFilePromise = promisify(readFileMock);
// readFilePromise('demo.txt').then(console.log).catch(console.error);
