/**
 * 懒汉式 LazyMan
 * @description
 * 注意：
 * 1. 在每次执行的任务里面调用next(任务按顺序执行)，而不是添加任务后执行next(立即执行task，多个任务会同时触发)
 * 2. 使用setTimeout确保构造函数执行完再启动任务队列
 */
class LazyMan {
    constructor(name) {
        this.name = name
        // 任务队列
        this.tasks = []
        const task = () => {
            console.log(`Hi I am ${name}`);
            this.next();
        }
        this.tasks.push(task)

        // 确保构造函数执行完再启动任务队列
        setTimeout(() => {
            this.next()
        }, 0)
    }

    // 启动一次任务队列（执行第一个任务）
    next() {
        const task = this.tasks.shift()
        if (task) task()
    }

    eat(food) {
        const task = () => {
            console.log(`Eat ${food}~`);
            this.next();
        }
        this.tasks.push(task)
        return this
    }

    sleep(seconds) {
        const task = () => {
            setTimeout(() => {
                console.log(`Wake up after ${seconds}s`);
                this.next();
            }, seconds * 1000)
        }
        this.tasks.push(task)
        return this
    }

    sleepFirst(seconds) {
        const task = () => {
            setTimeout(() => {
                console.log(`Wake up after ${seconds}s`);
                this.next();
            }, seconds * 1000)
        }
        this.tasks.unshift(task)
        return this
    }
}

// new LazyMan("Hank").eat("dinner");
// Hi I am Hank
// Eat dinner~

// new LazyMan("Hank").sleep(2).eat("dinner");
// Hi I am Hank
// （2秒后） Wake up after 2s
// Eat dinner~

// new LazyMan("Hank").sleepFirst(2).eat("dinner");
// （2秒后） Wake up after 2s
// Hi I am Hank
// Eat dinner~

