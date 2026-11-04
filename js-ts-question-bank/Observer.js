/**
 * Observer 观察者模式
 */
class Subject {
    constructor() {
        this.observers = []
    }

    add(observer) {
        this.observers.push(observer)
    }

    remove(observer) {
        this.observers = this.observers.filter(o => o!== observer)
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data))
    }
}

class Observer {
    constructor(name) {
        this.name = name
    }

    update(data) {
        console.log(`${this.name} 收到通知:`, data);
    }
}

// 使用示例
// const subject = new Subject();
// const observer1 = new Observer("观察者1");
// const observer2 = new Observer("观察者2");
// subject.add(observer1);
// subject.add(observer2);
// // 被观察者发生变化，通知所有观察者
// subject.notify("文件已更新");
// // 移除观察者1，再次通知
// subject.remove(observer1);
// subject.notify("数据已同步");
