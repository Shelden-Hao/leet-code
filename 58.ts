/**
 * 58. 最后一个单词的长度
 * https://leetcode.cn/problems/length-of-last-word/description/
 * @param s 原字符串
 */
function lengthOfLastWord(s: string): number {
    let i = s.length - 1;
    let length = 0;

    // 1. 跳过结尾的空格
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // 2. 统计最后一个单词的长度
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
}


// 不推荐写法：直接使用trim+split
// function lengthOfLastWord(s: string): number {
//     const words = s.trim().split(" ");
//     return words[words.length - 1].length;
// }
