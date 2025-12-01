/**
 * 判断一个变量的类型
 * @description
 * 1. typeof 只能准确判断 number, boolean, string, undefined, bigint, symbol, function。
 * 2. Object.prototype.toString.call() 能够准确判断的原理是利用了 ES 规范中的内部属性 [[Class]]（早期规范）或 Symbol.toStringTag（新规范）
 * @param {any} value 要判断的变量类型
 */
function typeOf(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

// console.log(typeOf(111)); // [object Number] => number
// console.log(typeOf([])); // [object Array] => array
// console.log(typeof Symbol("111")); // symbol
// console.log(typeof BigInt("9007199254740991")); // bigint
