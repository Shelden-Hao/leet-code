/**
 * [49. 字母异位词分组](https://leetcode.cn/problems/group-anagrams/)
 * 构建异位词的key，将相同元素放在哈希表的同一个key下，然后把哈希表的values返回
 */
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String,List<String>> map = new HashMap<>();
        for (String str : strs) {
            int n = str.length();
            int[] count = new int[26];
            for (int i = 0; i < n; i++) {
                char c = str.charAt(i);
                count[c-'a']++;
            }
            StringBuilder stringBuilder = new StringBuilder();
            for (int i = 0; i < 26; i++) {
                if (count[i]!=0){
                    stringBuilder.append('a'+i);
                    stringBuilder.append(count[i]);
                }
            }
            String key = stringBuilder.toString();
            List<String> e = map.getOrDefault(key, new ArrayList<>());
            e.add(str);
            map.put(key,e);
        }
        return map.values().stream().toList();
    }
}

/**
 * [49. 字母异位词分组](https://leetcode.cn/problems/group-anagrams/)
 * 排序做法
 */
// class Solution {
//     public List<List<String>> groupAnagrams(String[] strs) {
//         Map<String, List<String>> map = new HashMap<>();
//         for (String str : strs) {
//             int n = str.length();
//             char[] chars = str.toCharArray();
//             Arrays.sort(chars);
//             String key = new String(chars);
//             List<String> e = map.getOrDefault(key, new ArrayList<>());
//             e.add(str);
//             map.put(key, e);
//         }
//         return map.values().stream().toList();
//     }
// }