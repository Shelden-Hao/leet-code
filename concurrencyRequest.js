// 1. 串行（serial）：
// - 每次只跑一个任务。
// - 下一个任务必须等上一个 完全完成 才能开始。
// - 如果有 10 个任务，每个要 1s，总时间 = 10s。
// 2. 完全并行（parallel, concurrency = n）
// - 全部任务一起跑。
// - 如果 10 个任务，每个 1s → 总时间 ≈ 1s。
// - 但风险是：太多任务可能压垮浏览器、API、数据库。
// 3. 并发调度器（scheduler with concurrency = k）：
// - 同时允许 k 个任务 并发执行。
// - 每完成一个，就马上启动队列里的下一个。
// - 如果 k = 2，10 个任务，每个 1s → 总时间 ≈ 5s。

/**
 * 一、并发请求
 * @description 接收一个url数组和一个最大并发请求数，返回一个敲定的Promise。
 * 和Promise.all最大的区别就是Promise.all不会控制并发(同理不用补位)。
 */
function concurrencyRequest(urls, maxNum) {
    return new Promise(resolve => {
        // 如果urls为空，直接resolve
        if (urls.length === 0) {
            resolve([])
            return
        }
        // 结果数组
        const result = []
        // 请求任务索引
        let reqIndex = 0
        // 完成的请求数
        let overCount = 0

        async function request() {
            // 响应的索引需要与开始请求的索引相同
            let respIndex = reqIndex
            const url = urls[reqIndex]
            reqIndex++
            // 发送当前请求
            result[respIndex] = await fetch(url)
            overCount++
            // 每完成一个请求，立刻调用下一个请求进行补位
            if (reqIndex < urls.length) {
                request()
            }
            if (overCount === urls.length) {
                resolve(result)
            }
        }
        // 在最大并发数和urls中选择较小值进行多个并发
        for (let i = 0; i < Math.min(urls.length, maxNum); i++) {
            request()
        }
    })
}

// /**
//  * 二、串行请求
//  * @param tasks
//  * @return {Promise<*[]>}
//  */
// async function serialRequests(tasks) {
//     const results = [];
//     for (let task of tasks) {
//         const res = await task();  // 等待上一个完成
//         results.push(res);
//     }
//     return results;
// }
//
// // 测试
// const tasks = [
//     () => mockRequest(1000, "A"),
//     () => mockRequest(500, "B"),
//     () => mockRequest(300, "C")
// ];
// serialRequests(tasks).then(res => console.log("串行结果:", res));
//
// /**
//  * 三、并行请求
//  * @param tasks
//  * @return {Promise<Awaited<unknown>[]>}
//  */
// async function parallelRequests(tasks) {
//     return Promise.all(tasks.map(task => task())); // 一起跑
// }
//
// // 测试
// parallelRequests(tasks).then(res => console.log("并行结果:", res));
