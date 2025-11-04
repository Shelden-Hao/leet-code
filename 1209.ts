/**
 * 1209. 删除字符串中的所有相邻重复项 II
 * @description 使用栈，栈的每一项是二维数组，存储字符及其出现次数。
 * 遍历字符串，遇到相同字符则增加计数，否则将当前字符及计数 1 入栈。
 * 当计数达到 k 时，弹出栈顶元素。
 * @param s 原字符串
 * @param k k 个字符相邻且相等
 * @returns 删除所有相邻重复 k 个字符后的字符串
 */
function removeDuplicates_1209(s: string, k: number): string {
    // 二维数组，存储字符及其出现次数
    let stack: [string, number][] = [];
    for (let char of s) {
        if (stack.length && stack[stack.length - 1][0] === char) {
            // 当前字符与栈顶字符相同，增加计数
            stack[stack.length - 1][1]++;
            // 如果计数达到 k，弹出栈顶元素
            if (stack[stack.length - 1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([char, 1]);
        }
    }
    return stack.map(([char, count]) => char.repeat(count)).join('');
};