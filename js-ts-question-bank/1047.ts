/**
 * 1047. 删除字符串中的所有相邻重复项
 * https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/description/
 * @description 使用栈，遍历字符串，遇到相同字符则弹出栈顶元素，否则将当前字符入栈。
 * 注意点：题干要求只需要删除两个相邻重复项即可，无需考虑多个重复项。
 * @param {string} str - 输入字符串
 * @return {string} - 删除所有相邻重复项后的字符串
 */
function removeDuplicates_1047(s: string): string {
    let stack: string[] = [];
    for (let char of s) {
        if (stack.length && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
};