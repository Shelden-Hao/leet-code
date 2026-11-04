/**
 * 模拟实现 new 操作符的函数
 * @param {Function} Constructor 构造函数
 * @param {...any} args 传递给构造函数的参数
 * @return {*} 如果无返回值或者显示返回一个对象，则返回构造函数的执行结果；如果显示返回一个基本类型，则返回构造函数的实例
 */
function myNew(Constructor, ...args) {
    // 1. 创建一个全新的空对象 2. 为这个空对象设置原型(__proto__)
    // 可以使用 {}，但是推荐使用 Object.create() 创建对象并设置原型
    const instance = Object.create(Constructor.prototype)

    // 3. 绑定构造函数的this为其新创建的空实例对象，并执行构造函数体
    const result = Constructor.apply(instance, args)

    const isObject = typeof result === 'object' && result !== null
    const isFunction = typeof result === 'function'
    // 4. 如果构造函数返回一个非原始值，则返回这个对象；否则返回创建的新实例对象
    if (isObject || isFunction) return result
    return instance
}
