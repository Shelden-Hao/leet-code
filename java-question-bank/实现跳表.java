import java.util.*;

/**
 * [手写] 跳表
 * 多层有序链表，随机层高决定索引密度，查找/插入/删除期望 O(log n)，是 Redis zset 的核心结构。
 */
class MySkipListDemo {
    public static void main(String[] args) {
        SkipList sk = new SkipList();
        TreeMap<Integer, Integer> ref = new TreeMap<>();
        Random r = new Random(3);
        for (int i = 0; i < 5000; i++) {
            int k = r.nextInt(300), v = r.nextInt(100000);
            if (r.nextBoolean()) {
                sk.put(k, v);
                ref.put(k, v);
            } else {
                sk.remove(k);
                ref.remove(k);
            }
        }
        for (int k = 0; k < 300; k++) {
            check(sk.get(k), ref.getOrDefault(k, -1), "key=" + k);
        }
        check(sk.size(), ref.size(), "元素个数");
        check(sk.get(999), -1, "不存在的 key");
        System.out.println("实现跳表 全部通过（5000 次随机读写与 TreeMap 对拍）");
    }

    static class SkipList {
        private static final int MAX_LEVEL = 16;
        private final Node head = new Node(-1, -1, MAX_LEVEL);
        private final Random rnd = new Random(5);
        private int level = 1;
        private int size;

        private static class Node {
            final int key;
            int val;
            final Node[] forward;

            Node(int key, int val, int lv) {
                this.key = key;
                this.val = val;
                this.forward = new Node[lv];
            }
        }

        private int randomLevel() {
            int lv = 1;
            while (lv < MAX_LEVEL && rnd.nextDouble() < 0.5) lv++;
            return lv;
        }

        public int get(int key) {
            Node x = head;
            for (int i = level - 1; i >= 0; i--) {
                while (x.forward[i] != null && x.forward[i].key < key) x = x.forward[i];
            }
            x = x.forward[0];
            return (x != null && x.key == key) ? x.val : -1;
        }

        public void put(int key, int val) {
            Node[] update = new Node[MAX_LEVEL];
            Node x = head;
            for (int i = level - 1; i >= 0; i--) {
                while (x.forward[i] != null && x.forward[i].key < key) x = x.forward[i];
                update[i] = x;
            }
            x = x.forward[0];
            if (x != null && x.key == key) {
                x.val = val;
                return;
            }
            int lv = randomLevel();
            if (lv > level) {
                for (int i = level; i < lv; i++) update[i] = head;
                level = lv;
            }
            Node node = new Node(key, val, lv);
            for (int i = 0; i < lv; i++) {
                node.forward[i] = update[i].forward[i];
                update[i].forward[i] = node;
            }
            size++;
        }

        public void remove(int key) {
            Node[] update = new Node[MAX_LEVEL];
            Node x = head;
            for (int i = level - 1; i >= 0; i--) {
                while (x.forward[i] != null && x.forward[i].key < key) x = x.forward[i];
                update[i] = x;
            }
            x = x.forward[0];
            if (x == null || x.key != key) return;
            for (int i = 0; i < level; i++) {
                if (update[i].forward[i] != x) break;
                update[i].forward[i] = x.forward[i];
            }
            while (level > 1 && head.forward[level - 1] == null) level--;
            size--;
        }

        public int size() {
            return size;
        }
    }

    private static void check(Object a, Object e, String name) {
        if (!java.util.Objects.equals(a, e)) throw new AssertionError(name + " 期望 " + e + "，实际 " + a);
    }
}
