/**
 * 151. 反转字符串中的单词
 * https://leetcode.cn/problems/reverse-words-in-a-string/description/
 * @param s
 * @description 双指针。右指针负责遍历，左指针负责判断拼接字符拼接条件。
 */
function reverseWords(s: string): string {
    let j = s.length - 1
    let res = ''
    while (j >= 0) {
        // 跳过空格
        while (s[j] === ' ' && j >= 0) j--
        if (j < 0) break
        // j 为右指针(此时单词的右边索引)，然后使用 i 作为左指针找到此时单词的左边索引
        let i = j
        while (i >= 0 && s[i] !== ' ') i--
        // 如果之前已经拼接过单词，那么先加上空格
        if (res.length > 0) res += ' '
        // 然后拼接上该单词（使用左右指针截取）
        res += s.substring(i + 1, j + 1)
        j = i
    }
    return res
};
