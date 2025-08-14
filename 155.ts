/**
 * 155. 最小栈
 * https://leetcode.cn/problems/min-stack/description/
 * @description 除了维护栈本身外，还需要维护一个最小栈，每次存放/弹出时同时判断是否需要更改最小栈中的栈顶
 */
class MinStack {
    private _stack: number[] = []
    private _minStack: number[] = [] // 以 O(n) 的空间复杂度换取时间

    constructor() {}

    push(val: number): void {
        this._stack.push(val)
        if (this._minStack.length === 0 || val <= this._minStack[this._minStack.length - 1]) {
            this._minStack.push(val)
        }
    }

    pop(): void {
        const val = this._stack.pop()
        if (val === this._minStack[this._minStack.length - 1]) {
            this._minStack.pop()
        }
    }

    top(): number {
        return this._stack[this._stack.length - 1]
    }

    getMin(): number {
        return this._minStack[this._minStack.length - 1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
