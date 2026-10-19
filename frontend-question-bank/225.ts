/**
 * 225. 用队列实现栈
 * https://leetcode.cn/problems/implement-stack-using-queues/description/
 * @description 难点在于对栈顶元素操作的时候需要多使用一个队列，用完还要复原
 */
class MyStack {
    private headQueue: number[]
    private tailQueue: number[]

    constructor() {
        this.headQueue = []
        this.tailQueue = []
    }

    push(x: number): void {
        this.headQueue.push(x)
    }

    pop(): number {
        if (this.empty()) return -1
        // 需要把栈顶元素留下单独操作
        while (this.headQueue.length > 1) {
            this.tailQueue.push(this.headQueue.shift()!)
        }
        const value = this.headQueue.shift()!
        // tailQueue只用于得到栈顶，用于相当于复原
        this.headQueue = this.tailQueue
        this.tailQueue = []
        return value
    }

    top(): number {
        if (this.empty()) return -1
        while (this.headQueue.length > 1) {
            this.tailQueue.push(this.headQueue.shift()!)
        }
        const value = this.headQueue.shift()!
        this.tailQueue.push(value)
        this.headQueue = this.tailQueue
        this.tailQueue = []
        return value
    }

    empty(): boolean {
        return this.headQueue.length === 0 && this.tailQueue.length === 0
    }
}

export {}
