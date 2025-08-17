// 数组去重

/**
 * 方法一：Map 记录
 */
function deduplication(arr) {
    const newArr = []
    const map = new Map()
    arr.forEach(item => {
        if (!map.has(item)) {
            map.set(item, 1)
            newArr.push(item)
        }
    })
    return newArr
}

/**
 * 方法二：Set 去重
 */
function deduplication2(arr) {
    return [...new Set(arr)]
}

const arr = [1,4,2,5,76,3,4,5,2,1,2,1]

console.log(deduplication(arr))
console.log(deduplication2(arr))
