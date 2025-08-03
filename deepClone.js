/**
 * 方法一 递归clone
 * @param obj 原对象
 * @param hash 存储原对象和克隆对象的映射
 * @return {*|*[]|{}} 克隆对象
 */
function deepClone(obj, hash = new WeakMap()) {
    // 边界情况 null 或者基本类型
    if (obj === null || typeof obj !== 'object') {
        return obj
    }
    // 处理循环引用
    if (hash.has(obj)) {
        return hash.get(obj)
    }
    // 创建对象/数组新容器
    const cloneObj = Array.isArray(obj) ? [] : {}
    hash.set(obj, cloneObj)
    // 递归拷贝到新容器
    for (const objKey in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, objKey)) {
            cloneObj[objKey] = deepClone(obj[objKey], hash)
        }
    }
    return cloneObj
}

const obj = {
    name: "John",
    age: 30,
    address: { city: "New York", state: "NY" },
};
// 方法二 JSON.parse(JSON.stringify(obj));
const obj2 = JSON.parse(JSON.stringify(obj));
// const obj2 = deepClone(obj);
obj2.address.city = "Chicago";
console.log(obj.address.city); // Output: New York
console.log(obj2.address.city); // Output: Chicago

// 方法三 lodash _.cloneDeep
// 方法四 structuredClone()
