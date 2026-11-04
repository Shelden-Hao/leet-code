/**
 * [460. LFU 缓存](https://leetcode.cn/problems/lfu-cache/)
 * 哈希表定位节点 + 频次到 LinkedHashSet 的映射，同频次内按插入顺序淘汰最久未用
 */
class LFUCache {
    private int capacity;
    private int size;
    private int minFreq;
    private Map<Integer, Node> cache;
    private Map<Integer, LinkedHashSet<Node>> freqMap;

    public LFUCache(int capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.minFreq = 0;
        cache = new HashMap<>();
        freqMap = new HashMap<>();
    }

    public int get(int key) {
        Node node = cache.get(key);
        if (node == null) return -1;
        increaseFreq(node);
        return node.value;
    }

    public void put(int key, int value) {
        if (capacity == 0) return;
        Node node = cache.get(key);
        if (node != null) {
            node.value = value;
            increaseFreq(node);
            return;
        }
        if (size == capacity) {
            LinkedHashSet<Node> set = freqMap.get(minFreq);
            Node victim = set.iterator().next();
            set.remove(victim);
            cache.remove(victim.key);
            size--;
        }
        Node fresh = new Node(key, value);
        cache.put(key, fresh);
        freqMap.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(fresh);
        minFreq = 1;
        size++;
    }

    private void increaseFreq(Node node) {
        int old = node.freq;
        LinkedHashSet<Node> set = freqMap.get(old);
        set.remove(node);
        if (old == minFreq && set.isEmpty()) minFreq = old + 1;
        node.freq++;
        freqMap.computeIfAbsent(node.freq, k -> new LinkedHashSet<>()).add(node);
    }

    private static class Node {
        int key;
        int value;
        int freq;

        Node(int key, int value) {
            this.key = key;
            this.value = value;
            this.freq = 1;
        }
    }
}
