/**
 Do not return anything, modify s in-place instead.
 */
/**
 * 344. 反转字符串
 * @param s 字符串数组
 */
function reverseString(s: string[]): void {
    if (s.length === 0 || s.length === 1) return
    let left = 0
    let right = s.length - 1
    while (left < right) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
};
