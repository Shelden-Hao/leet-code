/**
 * 1249. 移除无效的括号
 * https://leetcode.cn/problems/minimum-remove-to-make-valid-parentheses/description/
 * @param s 原字符串
 * @returns 移除无效括号后的字符串
 */
function minRemoveToMakeValid(s: string): string {
  function toRemove(str: string) {
    // 用栈记录要删除的符号的下标
    const stack: number[] = [];
    const remove = new Set<number>();
    // 先只用 stack 处理 '('，remove 处理 ')'
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === "(") {
        // 记录 '(' 的索引
        stack.push(i);
      } else if (char === ")") {
        if (stack.length > 0) {
          // 匹配一个 '('，将其弹出
          stack.pop();
        } else {
          // 多余的 ')'，标记删除
          remove.add(i);
        }
      }
    }
    // 剩下的 stack 中的 '(' 都是多余的，需要标记删除
    for (const i of stack) {
      remove.add(i);
    }
    return remove;
  }
  const needRemove = toRemove(s);
  let res: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (!needRemove.has(i)) {
      res.push(s[i]);
    }
  }
  return res.join("");
}
