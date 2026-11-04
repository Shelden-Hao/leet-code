/**
 * [151. 反转字符串里的单词](https://leetcode.cn/problems/reverse-words-in-a-string/)
 * trim 后按空白分词，倒序拼回并用单个空格连接
 */
class Solution {
    public String reverseWords(String s) {
        String[] words = s.trim().split("\\s+");
        StringBuilder sb = new StringBuilder();
        for (int i = words.length - 1; i >= 0; i--) {
            if (sb.length() > 0) sb.append(' ');
            sb.append(words[i]);
        }
        return sb.toString();
    }
}
