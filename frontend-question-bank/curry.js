/**
 * 函数柯里化 curry
 * @param fn
 * @return {(function(...[*]): (*))|*}
 * @description
 * 应用场景：
 * runtime-core\src\renderer.ts
 * createApp 里面接收一个 render 渲染器函数，然后createApp 柯里化后的内部函数第一个参数接收 rootComponent 根组件（App.vue），所以可以等同于 createAppAPI(render, hydrate)(App) 。
 * 这样做的好处是，render 和 根组件分开传递，并且在传递根组件之前就可以保存 render 渲染器函数；
 * 假如我们希望 render 不再渲染 web 应用，而是渲染移动端应用时，只需要传递不同的 render ，而无需更改内部的 App 根组件参数，提高函数复用性。
 * https://raw.githubusercontent.com/Shelden-Hao/images/main/images202604300858605.png
 */
function curry(fn) {
  return function curried(...args) {
    // 如果参数够了，直接执行
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    // 否则返回一个函数，继续收集参数
    return function (...nextArgs) {
      // `fn.apply(this, args)` 中的 `this`，指的是柯里化后函数被调用时的上下文
      // 如果你直接写 `fn(...args)`，那么 `fn` 内部的 this 会丢失（在严格模式下是 undefined，非严格模式下是全局对象 window）
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}
// function sum(a, b, c) {
//     return a + b + c;
// }
//
// const curriedSum = curry(sum);
//
// console.log(curriedSum(1)(2)(3)); // 6
// console.log(curriedSum(1, 2)(3)); // 6
// console.log(curriedSum(1)(2, 3)); // 6
