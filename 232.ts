/**
 * 232. 用栈实现队列
 * https://leetcode.cn/problems/implement-queue-using-stacks/description/
 * @description 使用两个栈。一个队头栈，一个队尾栈。栈顶(允许操作数据的一端)分别为队头和队尾。
 */
class MyQueue {
    // 队列尾部
    private queueTail: number[] = []
    // 队列头部
    private queueHead: number[] = []

    // 队尾操作：直接加入
    // 队头操作：队头栈有数据，直接操作；队头栈没有数据，先将队尾栈都加入队头栈，然后再操作队头栈
    constructor() {}

    // 添加元素到队尾
    push(x: number): void {
        this.queueTail.push(x)
    }

    // 从队头移除并返回队头元素
    pop(): number {
        this.moveIfNeeded()
        if (!this.empty()) {
            return this.queueHead.pop()!
        } else {
            return -1
        }
    }

    // 返回队头元素
    peek(): number {
        this.moveIfNeeded()
        return this.queueHead[this.queueHead.length - 1]
    }

    // 判断队列是否为空
    empty(): boolean {
        return !Boolean(this.queueHead.length + this.queueTail.length)
    }

    private moveIfNeeded() {
        // 必须要当队头栈为空的时候才可以将队尾栈中的所有元素迁移到队头栈，否则会影响顺序。
        // 因为队尾栈维护新添加的数据，而队头栈维护旧的/要移除的数据，如果队头栈不为空的时候就将队尾栈元素加入，那么会导致新添加的元素在旧元素的前面(队头处)。
        if (this.queueHead.length === 0) {
            while (this.queueTail.length) {
                this.queueHead.push(this.queueTail.pop()!)
            }
        }
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
