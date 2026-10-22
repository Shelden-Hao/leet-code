/**
 * [146. LRU 缓存](https://leetcode.cn/problems/lru-cache/)
 */
class LRUCache {
    int capacity;
    int size;
    DLinkNode head;
    DLinkNode tail;
    Map<Integer, DLinkNode> map;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.size = 0;
        map = new HashMap<>();
        head = new DLinkNode();
        tail = new DLinkNode();
        head.next = tail;
        tail.pre = head;
    }

    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        DLinkNode node = remove(key);
        add(node);
        return node.val;
    }

    public void put(int key, int value) {
        if (map.containsKey(key)) {
            remove(key);
            size--;
        }
        if (size == capacity) {
            remove(tail.pre.key);
            size--;
        }
        add(new DLinkNode(key, value));
        size++;
    }

    public DLinkNode remove(int key) {
        DLinkNode node = map.get(key);
        node.pre.next = node.next;
        node.next.pre = node.pre;
        map.remove(key);
        return node;
    }

    public void add(DLinkNode node) {
        // 头插，头部是最近使用
        node.next = head.next;
        node.pre = head;
        head.next.pre = node;
        head.next = node;
        map.put(node.key, node);
    }

    class DLinkNode {
        int key;
        int val;
        DLinkNode pre;
        DLinkNode next;

        public DLinkNode() {
        }

        public DLinkNode(int key, int val) {
            this.key = key;
            this.val = val;
        }
    }
}
