/**
 * 125. 验证回文串
 * https://leetcode.cn/problems/valid-palindrome/description/
 * @param s 原字符串
 * @description 双指针+正则
 */
function isPalindrome(s: string): boolean {
    let left = 0, right = s.length - 1
    function isAlphaNumeric(char: string): boolean {
        return /[a-zA-Z0-9]/.test(char)
    }
    while (left < right) {
        // 跳过非字母非数字
        while (left < right && !isAlphaNumeric(s[left])) left++
        while (left < right && !isAlphaNumeric(s[right])) right--
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
        left++
        right--
    }
    return true
};
