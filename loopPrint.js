/**
 * 1. 用 promise 实现无限循环打印数组元素
 * @param arr 数组
 * @param delay 打印一次延迟时间
 */
function loopPrint(arr, delay = 1000) {
    let index = 0

    function print() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(arr[index])
                index = (index + 1) % arr.length
                resolve()
            }, delay)
        }).then(print)
    }
    print()
}

loopPrint(['A', 'B', 'C'], 1000)

// 这里用 递归 + Promise.then 来实现，不会造成栈溢出，因为 then 会把回调放到微任务队列，
// 当前调用栈清空后，事件循环（Event Loop）才会去执行微任务。
// 所以每一轮递归实际上是「异步调度」的，栈在执行下一个 print 之前已经释放了。
// 普通递归如果是同步的话，会一直函数调用套函数调用，栈越来越深，直到溢出。

/**
 * 2. 封装一个带控制启动暂停的循环打印函数
 */
// function createLoopPrinter(arr, delay = 1000) {
//     let index = 0
//     let running = true
//
//     function print() {
//         if (!running) return
//         return new Promise(resolve =>  {
//             setTimeout(() => {
//                 console.log(arr[index])
//                 index   = (index + 1) % arr.length
//                 resolve()
//             }, delay)
//         }).then(print)
//     }
//
//     // 启动
//     print()
//
//     // 返回控制方法
//     return {
//         stop() {
//             running = false
//         },
//         start() {
//             if (!running) {
//                 running = true
//                 print()
//             }
//         }
//     }
// }
//
// const printer = createLoopPrinter(['A', 'B', 'C'], 1000);
//
// setTimeout(() => {
//     printer.stop(); // 3秒后停止打印
//     console.log('Stopped');
// }, 3000);
//
// setTimeout(() => {
//     printer.start(); // 5秒后重新启动
//     console.log('Started again');
// }, 5000);

export {}
