import java.util.*;

/**
 * [手写] 海量数据 TopK / 大文件词频
 * 内存放不下全量数据时：小顶堆只维护 k 个候选，O(n log k) 时间、O(k) 内存；
 * 大文件按哈希分片统计词频，再对每个分片取 TopK，最后归并。
 */
class MassiveTopK {
    public static void main(String[] args) {
        Random r = new Random(9);
        int n = 200000, k = 10;
        int[] data = new int[n];
        for (int i = 0; i < n; i++) data[i] = r.nextInt(1000000);
        int[] sorted = data.clone();
        Arrays.sort(sorted);
        List<Integer> expect = new ArrayList<>();
        for (int i = n - 1; i >= n - k; i--) expect.add(sorted[i]);
        check(topK(data, k), expect, "20 万数据 Top10 与全排序对拍");

        String[] words = {"a", "b", "a", "c", "b", "a", "d", "a", "c"};
        check(topKWords(words, 2), Arrays.asList("a", "b"), "词频 Top2（同频按字典序）");
        System.out.println("海量数据TopK 全部通过（20 万数据 + 词频统计）");
    }

    public static List<Integer> topK(int[] data, int k) {
        PriorityQueue<Integer> heap = new PriorityQueue<>();
        for (int x : data) {
            if (heap.size() < k) heap.offer(x);
            else if (x > heap.peek()) {
                heap.poll();
                heap.offer(x);
            }
        }
        List<Integer> res = new ArrayList<>(heap);
        res.sort(Comparator.reverseOrder());
        return res;
    }

    public static List<String> topKWords(String[] words, int k) {
        Map<String, Integer> freq = new HashMap<>();
        for (String w : words) freq.merge(w, 1, Integer::sum);
        PriorityQueue<Map.Entry<String, Integer>> heap = new PriorityQueue<>((a, b) -> {
            int c = Integer.compare(a.getValue(), b.getValue());
            return c != 0 ? c : b.getKey().compareTo(a.getKey());
        });
        for (Map.Entry<String, Integer> e : freq.entrySet()) {
            if (heap.size() < k) {
                heap.offer(e);
            } else {
                Map.Entry<String, Integer> top = heap.peek();
                if (e.getValue() > top.getValue()
                        || (e.getValue().equals(top.getValue()) && e.getKey().compareTo(top.getKey()) < 0)) {
                    heap.poll();
                    heap.offer(e);
                }
            }
        }
        List<String> res = new ArrayList<>();
        while (!heap.isEmpty()) res.add(heap.poll().getKey());
        Collections.reverse(res);
        return res;
    }

    private static void check(Object a, Object e, String name) {
        if (!java.util.Objects.equals(a, e)) throw new AssertionError(name + " 期望 " + e + "，实际 " + a);
    }
}
