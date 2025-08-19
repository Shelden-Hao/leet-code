Function.prototype.myCall = function (thisArg, ...args) {
    // 1. 获取需要执行的函数
    const fn = this;
    // 2. 对 thisArg 转成对象类型 防止传入非对象类型
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
    // 3. 调用需要被执行的函数
    thisArg.fn = fn
    const result = thisArg.fn(...args)
    delete thisArg.fn
    // 4. 返回函数执行结果
    return result
};

Function.prototype.myApply = function (thisArg, argArray) {
    // 1. 获取原函数
    const fn = this
    // 2. 判断新this
    // (thisArg !== null && thisArg !== undefined) 避免 0 为false的情况
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
    thisArg.fn = fn
    // 3. 判断argArray
    argArray = argArray ? argArray : []
    // 4. 调用函数
    const result = thisArg.fn(...argArray)
    // 5. 删除属性
    delete thisArg.fn
    // 6. 返回结果
    return result
}

Function.prototype.myBind = function (thisArg, ...args) {
    // 1. 获取原函数
    const fn = this
    // 2. 绑定this
    thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window

    // 3. 代理函数执行原函数
    function proxyFn(...proxyArgs) {
        thisArg.fn = fn
        const result = thisArg.fn(...args, ...proxyArgs)
        delete thisArg.fn
        return result
    }
    // 4. 返回代理函数
    return proxyFn
};
