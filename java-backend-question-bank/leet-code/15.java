/**
 * [15. 三数之和](https://leetcode.cn/problems/3sum/)
 * 先排序，再使用三指针，指针i从前往后遍历，每次循环中使用双指针j和k，若当前之和小于target则右指针前移，否则左指针后移。这里的关键是需要去重。每次结果匹配后需要移动双指针时，先记录当前指针的值，然后一直移动直到数值不相等为止。
 */
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        int i = 0;
        List<List<Integer>> ans = new ArrayList<>();
        while (i <= nums.length - 3 && nums[i] <= 0) {
            int j = i + 1;
            int k = nums.length - 1;
            while (j < k) {
                int sum = nums[i] + nums[j] + nums[k];
                if (sum == 0) {
                    ans.add(Arrays.asList(nums[i], nums[j], nums[k]));
                    int temp = nums[j];
                    while (j < k && nums[++j] == temp) ;
                    temp = nums[k];
                    while (j < k && nums[--k] == temp) ;
                } else if (sum > 0) {
                    --k;
                } else {
                    ++j;
                }
            }
            int temp = nums[i];
            while (i <= nums.length - 3 && nums[++i] == temp) ;
        }
        return ans;
    }
}