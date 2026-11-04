/**
 * [66. 加一](https://leetcode.cn/problems/plus-one/)
 * 从末位加一，遇到 9 就置 0 并继续进位，全为 9 时新开数组首位补 1
 */
class Solution {
    public int[] plusOne(int[] digits) {
        for (int i = digits.length - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }
            digits[i] = 0;
        }
        int[] res = new int[digits.length + 1];
        res[0] = 1;
        return res;
    }
}
