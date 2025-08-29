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

export {}
