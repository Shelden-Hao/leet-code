/**
 * 使用两个栈实现队列
 */
class MyQueue {
    // 队列尾部
    private queueTail: number[] = []
    // 队列头部
    private queueHead: number[] = []

    // 队尾操作：直接加入
    // 队头操作：队头栈有数据，直接操作；队头栈没有数据，先将队尾栈都加入队头栈，然后再操作队头栈
    constructor() {

    }

    // 添加元素到队尾
    push(x: number): void {
        this.queueTail.push(x);
    }

    // 从队头移除并返回队头元素
    pop(): number {
        if (this.queueHead.length) {
            // 队头栈有数据 直接弹出
            return this.queueHead.pop()!
        } else if (this.queueTail.length) {
            // 队尾栈有数据 先都放入队头栈 再弹出
            while (this.queueTail.length) {
                const item = this.queueTail.pop()!
                this.queueHead.push(item)
            }
            return this.queueHead.pop()!
        } else {
            // 两个栈都没有数据
            return -1
        }
    }

    // 返回队头元素
    peek(): number {
        if (this.queueHead.length) {
            // 队头栈有数据 直接弹出
            const temp = this.queueHead.pop()!
            this.queueHead.push(temp)
            return temp
        } else if (this.queueTail.length) {
            // 队尾栈有数据 先都放入队头栈 再弹出
            while (this.queueTail.length) {
                const item = this.queueTail.pop()!
                this.queueHead.push(item)
            }
            const temp = this.queueHead.pop()!
            this.queueHead.push(temp)
            return temp
        } else {
            // 两个栈都没有数据
            return -1
        }
    }

    // 判断队列是否为空
    empty(): boolean {
        return !Boolean(this.queueHead.length + this.queueTail.length)
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */