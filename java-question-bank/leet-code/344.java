/**
 * [344. 反转字符串](https://leetcode.cn/problems/reverse-string/)
 * 首尾双指针原地交换字符，空间 O(1)
 */
class Solution {
    public void reverseString(char[] s) {
        int l = 0, r = s.length - 1;
        while (l < r) {
            char t = s[l];
            s[l] = s[r];
            s[r] = t;
            l++;
            r--;
        }
    }
}
