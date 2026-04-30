/**
 * 179. 最大数
 * https://leetcode.cn/problems/largest-number/description/
 */
function largestNumber(nums: number[]): string {
  // 把每次数字转为string
  const strs = nums.map(String);
  strs.sort((a, b) => {
    const ab = a + b; // 10
    const ba = b + a; // 1
    // 比较规则：
    // 1. 逐字符比较
    // 2. 比较每个字符的 Unicode 编码
    // 3. 一旦出现不同字符，立即决定大小
    // 4. 如果前缀相同，短的更小，比如：'a' < 'aa'
    return ab < ba ? 1 : -1;
  });

  // 处理全0
  if (strs[0] === "0") return "0";
  return strs.join("");
}
