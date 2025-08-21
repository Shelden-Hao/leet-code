/**
 * 手写 toString
 * @return {string} 对象类型
 */
Object.prototype.toString = function () {
    if (this === null) return '[object null]'
    if (this === undefined) return '[object undefined]'

    function getInternalClass(obj) {
        if (Array.isArray(obj)) return 'Array'
        if (obj instanceof Date) return 'Date'
        if (obj instanceof RegExp) return 'RegExp'
        //...
        return 'Object'
    }
    // Symbol.toStringTag 内部属性会将对象的类型转为字符串
    // in 表达式会判断指定的属性是否在对象或其原型中
    const tag = Symbol.toStringTag in Object(this) ? this[Symbol.toStringTag] : getInternalClass(this)
    return `[object ${tag}]`
};
