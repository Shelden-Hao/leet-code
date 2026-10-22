/**
 * [347. 前 K 个高频元素](https://leetcode.cn/problems/top-k-frequent-elements/)
 */
class Solution {
    class Node {
        int value;
        int count;

        Node(int value, int count) {
            this.value = value;
            this.count = count;
        }
    }

    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Node> map = new HashMap<>();
        for (int num : nums) {
            Node node = map.getOrDefault(num, new Node(num, 0));
            node.count++;
            map.put(num, node);
        }
        // 大顶堆按出现次数排序，弹出 k 个即答案
        PriorityQueue<Node> queue = new PriorityQueue<>((a, b) -> b.count - a.count);
        queue.addAll(map.values());
        int[] ans = new int[k];
        for (int i = 0; i < k; i++) {
            ans[i] = queue.poll().value;
        }
        return ans;
    }
}
