/**
 * 节流
 * @param fn
 * @param delay
 * @description 在一段时间内只会执行一次，多次触发会被忽略。
 * 👉 典型场景：scroll、mousemove、按钮点击。
 */
function throttle(fn, delay = 300) {
    let timer = null
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                timer = null
            }, delay)
        }
    };
}

/**
 * 防抖
 * @param fn
 * @param delay
 * 在事件触发后 等待一段时间，如果这段时间内又触发了事件，就重新计时。
 * 👉 典型场景：搜索框输入、窗口 resize。
 */
function debounce(fn, delay = 300) {
    let timer = null
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    };
}

/**
 * 防抖——增强版
 * run()：触发防抖逻辑（延迟执行 fn）
 * cancel()：取消当前防抖任务
 * 当 dependencies 改变时，防抖状态重置（相当于 useEffect 的依赖行为）
 * @param {Function} fn 回调函数
 * @param {number} delay 防抖时间
 * @param {any[]} dependencies 依赖项数组
 * @returns 防抖函数执行函数和取消函数
 */
function debounceEnhanced(fn, delay = 300, dependencies = []) {
    let timer = null
    let prevDeps = dependencies
    function run(...args) {
        const currentDeps = JSON.stringify(args)
        if (currentDeps !== prevDeps) {
            clearTimeout(timer)
            prevDeps = currentDeps
        }
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
    function cancel() {
        clearTimeout(timer)
        timer = null
    }
    return {
        run,
        cancel
    }
}

export {}
