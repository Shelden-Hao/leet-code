var MyStack = function() {
    this.arr1 = [];
    this.arr2 = [];
};

MyStack.prototype.push = function(x) {
    this.arr2.push(x);
};

MyStack.prototype.pop = function() {
    if (this.arr2.length !== 0) {
        while (this.arr2.length > 1) {
            this.arr1.push(this.arr2.shift());
        }
        return this.arr2.shift();
    }
    while (this.arr1.length > 1) {
        this.arr2.push(this.arr1.shift());
    }
    return this.arr1.shift();
};

MyStack.prototype.top = function() {
    let topElement;
    if (this.arr2.length !== 0) {
        while (this.arr2.length > 1) {
            this.arr1.push(this.arr2.shift());
        }
        topElement = this.arr2[0];
        this.arr1.push(this.arr2.shift());
    } else {
        while (this.arr1.length > 1) {
            this.arr2.push(this.arr1.shift());
        }
        topElement = this.arr1[0];
        this.arr2.push(this.arr1.shift());
    }
    return topElement;
};

MyStack.prototype.empty = function() {
    return this.arr2.length === 0 && this.arr1.length === 0;
};


/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
