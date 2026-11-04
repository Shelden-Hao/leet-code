/**
 * [17. 电话号码的字母组合](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)
 */
class Solution {
    public List<String> letterCombinations(String digits) {
        List<String> ans = new ArrayList<>();
        if (digits.length() == 0) return ans;
        Map<Character, String> map = new HashMap<>();
        map.put('2', "abc");
        map.put('3', "def");
        map.put('4', "ghi");
        map.put('5', "jkl");
        map.put('6', "mno");
        map.put('7', "pqrs");
        map.put('8', "tuv");
        map.put('9', "wxyz");
        dfs(ans, new StringBuilder(), digits, 0, map);
        return ans;
    }

    private void dfs(List<String> ans, StringBuilder sb, String digits, int cur, Map<Character, String> map) {
        if (sb.length() == digits.length()) {
            ans.add(sb.toString());
            return;
        }
        String s = map.get(digits.charAt(cur));
        for (int i = 0; i < s.length(); i++) {
            sb.append(s.charAt(i));
            dfs(ans, sb, digits, cur + 1, map);
            sb.deleteCharAt(sb.length() - 1);
        }
    }
}
