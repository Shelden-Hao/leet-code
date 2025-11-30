/**
 * 方法一 递归clone - 最简易版
 * @param obj 原对象
 * @return {*|*[]|{}} 克隆对象
 */
function deepClone(obj) {
  // 边界情况 null 或者基本类型
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // 创建对象/数组新容器
  const cloneObj = Array.isArray(obj) ? [] : {};

  // 递归拷贝到新容器
  for (const objKey in obj) {
    if (obj.hasOwnProperty(objKey)) {
      cloneObj[objKey] = deepClone(obj[objKey]);
    }
  }
  return cloneObj;
}

// const obj = {
//   name: "John",
//   age: 30,
//   address: { city: "New York", state: "NY" },
// };

// 方法二 JSON.parse(JSON.stringify(obj));
// const obj2 = JSON.parse(JSON.stringify(obj));
// const obj2 = deepClone(obj);
// obj2.address.city = "Chicago";
// console.log(obj.address.city); // Output: New York
// console.log(obj2.address.city); // Output: Chicago

// 方法三 lodash _.cloneDeep
// 方法四 structuredClone()

// 方法一（补充）：解决循环引用问题
function deepClone2(value) {
  // 同时空间换时间，同时弱引用，可以进行垃圾回收，避免内存泄露
  const cache = new WeakMap();

  function _deepClone2(val) {
    if (val === null || typeof val !== "object") {
      return val;
    }
    if (cache.has(val)) {
      return cache.get(val);
    }

    const cloneValue = Array.isArray(val) ? [] : {};
    cache.set(val, cloneValue);

    for (const key in val) {
      if (val.hasOwnProperty(key)) {
        cloneValue[key] = _deepClone2(val[key]);
      }
    }

    return cloneValue;
  }

  return _deepClone2(value);
}

const obj3 = {
  arr: [1, 2, 3],
  a: 4,
};
obj3.sub = obj3;
obj3.arr.push(obj3);

const newObj = deepClone2(obj3);
console.log(newObj.arr !== obj3.arr); // true
console.log(newObj.sub !== obj3.sub); // true
console.log(newObj.arr[3] !== obj3); // true
console.log(newObj.arr[3] === newObj); // true
