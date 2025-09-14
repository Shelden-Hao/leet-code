/**
 * 方法一：手动循环实现驼峰和下划线命名的转换
 */

// 下划线转驼峰
function toCamelCaseLoop(str) {
    const parts = str.split('_')
    return parts[0] + parts.slice(1).map(s => s[0].toUpperCase() + s.slice(1)).join('')
}

// 驼峰转下划线
function toSnakeCaseLoop(str) {
    let res = ''
    for (let char of str) {
        if (/[A-Z]/.test(char)) {
            res += '_'+char.toLowerCase()
        } else{
            res += char
        }
    }
    return res
}

// console.log(toCamelCaseLoop("hello_world_test")) // helloWorldTest
// console.log(toSnakeCaseLoop("helloWorldTest"))   // hello_world_test

/**
 * 方法二：正则表达式实现驼峰和下划线命名的转换
 */

function toCamelCase(str) {
    // ([a-z]) → 捕获组，表示紧跟在 _ 后面的小写字母，括号里的内容可以在替换时拿到。
    // 针对于每次匹配项的函数参数：
    // _ → 第一个参数是整个匹配到的字符串，比如 _w。
    // c → 第二个参数是捕获组 ([a-z]) 里的内容，比如 w。
    return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase())
}

function toSnakeCase(str) {
    // $1 → 引用第一个捕获组，也就是大写字母本身。
    // "_$1" → 在大写字母前加一个下划线。
    return str.replace(/([A-Z])/g, '_$1').toLowerCase()
}

// console.log(toCamelCase("hello_world_test")) // helloWorldTest
// console.log(toSnakeCase("helloWorldTest")) // hello_world_test
