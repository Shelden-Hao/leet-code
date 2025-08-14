/**
 * 封装延迟Promise(将一个setTimeout封装到Promise中)
 * @param delay 延迟的时间(ms)
 * @param value Promise传入值(可选)
 */
function delayPromise(delay: number, value?: string) {
    return new Promise<string | undefined>((resolve) => {
        setTimeout(() => {
            resolve(value)
            console.log(value)
        }, delay)
    })
}

/**
 * 基于延迟Promise使用async/await构建任务队列
 */
// async function runTaskQueue() {
//     console.log('任务1开始...')
//     await delayPromise(1000) // 等待1s
//     console.log('任务1结束...')
//
//     console.log('任务2开始...')
//     await delayPromise(500) // 等待0.5s
//     console.log('任务2结束...')
// }
//
// runTaskQueue()

/**
 * 基于延迟Promise使用then方法构建任务队列
 */
Promise.resolve()
    .then(() => delayPromise(1000, '用时1000ms 完成任务1'))
    .then(() => delayPromise(500, '用时500ms 完成任务2'))
    .catch(error => console.error('执行过程中发生错误：', error))

console.log('任务队列开始执行（执行顺序取决于延迟）')
