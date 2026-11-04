var MyQueue = function () {
    this.arr1 = []
    this.arr2 = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.arr2.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.arr1.length) {
        return this.arr1.pop()
    }
    while (this.arr2.length) {
        this.arr1.push(this.arr2.pop())
    }
    return this.arr1.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let el = this.pop()
    this.arr1.push(el)
    return el
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.arr1.length && !this.arr2.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */