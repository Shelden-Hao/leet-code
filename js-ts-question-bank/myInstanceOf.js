/**
 * 模拟 instanceOf 的实现
 * @param object 实例对象
 * @param Constructor 构造函数(类)
 * @return {boolean}
 */
function myInstanceOf(object, Constructor) {
    // 初始获取对象的原型
    let proto = Object.getPrototypeOf(object)

    while (true) {
        // 遍历到原型链顶端
        if (proto === null) return false
        // 找到匹配的原型
        if (proto === Constructor.prototype) return true
        // 继续向上查找原型链
        proto = Object.getPrototypeOf(proto)
    }
}
