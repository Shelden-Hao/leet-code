/**
 * 方法一 递归clone - 最简易版
 * @param obj 原对象
 * @return {*|*[]|{}} 克隆对象
 */
function deepClone(obj) {
    // 边界情况 null 或者基本类型
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    // 创建对象/数组新容器
    const cloneObj = Array.isArray(obj) ? [] : {}

    // 递归拷贝到新容器
    for (const objKey in obj) {
        if (obj.hasOwnProperty(objKey)) {
            cloneObj[objKey] = deepClone(obj[objKey])
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
