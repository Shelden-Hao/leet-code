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
 * 一、利用 Promise 实现一个并发任务调度器
 */
class Scheduler {
    constructor(max) {
        this.max = max // 最大并发数
        this.count = 0 // 当前正在执行的任务数
        this.queue = [] // 等待队列
    }

    add(task) {
        return new Promise((resolve) => {
            // 启动任务调度器的函数
            const run = () => {
                this.count++
                task().then((res) => {
                    resolve(res)
                }).finally(() => {
                    this.count--
                    if (this.queue.length > 0) {
                        const next = this.queue.shift()
                        next() // 执行下一个任务
                    }
                })
            }
            if (this.count < this.max) {
                // 当前执行数小于最大并发数
                run()
            } else {
                this.queue.push(run)
            }
        })
    }
}

// 模拟请求：延迟 time 毫秒后返回 value
function mockRequest(time, value) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`完成请求: ${value}`);
            resolve(value);
        }, time);
    });
}

const scheduler = new Scheduler(2);

scheduler.add(() => mockRequest(1000, "1"));
scheduler.add(() => mockRequest(500, "2"));
scheduler.add(() => mockRequest(300, "3"));
scheduler.add(() => mockRequest(400, "4"));

// 输出顺序: 2 -> 3 -> 1 -> 4
// 先添加任务1和任务2，0.5s 后输出 2，将3加入任务队列，0.3s后输出3，再过0.2s输出1，再过0.2s后输出4

/**
 * 二、串行请求
 * @param tasks
 * @return {Promise<*[]>}
 */
async function serialRequests(tasks) {
    const results = [];
    for (let task of tasks) {
        const res = await task();  // 等待上一个完成
        results.push(res);
    }
    return results;
}

// 测试
const tasks = [
    () => mockRequest(1000, "A"),
    () => mockRequest(500, "B"),
    () => mockRequest(300, "C")
];
serialRequests(tasks).then(res => console.log("串行结果:", res));

/**
 * 三、并行请求
 * @param tasks
 * @return {Promise<Awaited<unknown>[]>}
 */
async function parallelRequests(tasks) {
    return Promise.all(tasks.map(task => task())); // 一起跑
}

// 测试
parallelRequests(tasks).then(res => console.log("并行结果:", res));
