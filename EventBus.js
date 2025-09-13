/**
 * 事件总线(EventBus/mitt) - 订阅发布模式
 * 常见的应用场景包括 组件间通信（事件总线）、全局消息通知、日志系统
 */
class EventBus {
    constructor() {
        this.events = {} // { eventName: [fn1, fn2, ...] }
    }

    // 订阅
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(callback)
    }

    // 取消订阅
    off(event, callback) {
        if (!this.events[event]) return
        this.events[event] = this.events[event].filter(fn => fn !== callback)
    }

    // 只执行一次
    once(event, callback) {
        const wrapper = (...args) => {
            callback(...args)
            // 这里的 this 必须得是在箭头函数内，否则读取不到正确的 this
            this.off(event, wrapper)
        }
        this.on(event, wrapper)
    }

    // 发布
    emit(event, ...args) {
        if (!this.events[event]) return
        this.events[event].forEach(fn => fn(...args))
    }
}

const bus = new EventBus();

function greet(name) {
    console.log(`Hello, ${name}`);
}

// 订阅
bus.on("hi", greet);

// 发布
bus.emit("hi", "Alice"); // Hello, Alice

// 取消订阅
bus.off("hi", greet);
bus.emit("hi", "Bob"); // 无输出

// 只执行一次
bus.once("onceEvent", (msg) => console.log(msg));
bus.emit("onceEvent", "Only once!"); // 输出 "Only once!"
bus.emit("onceEvent", "Not again!"); // 无输出
