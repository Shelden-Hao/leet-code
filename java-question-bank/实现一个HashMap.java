import java.util.*;

/**
 * [手写] HashMap
 * 数组 + 链地址法解决哈希冲突，负载因子超过 0.75 时按 2 倍扩容并重新散列（JDK7 风格简化版）。
 */
class MyHashMapDemo {
    public static void main(String[] args) {
        KVMap m = new KVMap();
        Map<Integer, Integer> ref = new HashMap<>();
        Random r = new Random(11);
        for (int i = 0; i < 10000; i++) {
            int k = r.nextInt(300), v = r.nextInt(100000);
            if (r.nextBoolean()) {
                m.put(k, v);
                ref.put(k, v);
            } else {
                m.remove(k);
                ref.remove(k);
            }
        }
        for (int k = 0; k < 300; k++) {
            check(m.get(k), ref.getOrDefault(k, -1), "key=" + k);
        }
        check(m.size(), ref.size(), "元素个数");
        check(m.containsKey(301), false, "不存在的 key");
        System.out.println("实现一个HashMap 全部通过（1 万次随机读写与 JDK HashMap 对拍）");
    }

    static class KVMap {
        private static class Node {
            final int key;
            int val;
            Node next;

            Node(int key, int val, Node next) {
                this.key = key;
                this.val = val;
                this.next = next;
            }
        }

        private Node[] table = new Node[16];
        private int size;

        private int index(int key, int len) {
            int h = key ^ (key >>> 16);
            return h & (len - 1);
        }

        public void put(int key, int val) {
            int i = index(key, table.length);
            for (Node p = table[i]; p != null; p = p.next) {
                if (p.key == key) {
                    p.val = val;
                    return;
                }
            }
            table[i] = new Node(key, val, table[i]);
            size++;
            if (size > table.length * 3 / 4) grow();
        }

        private void grow() {
            Node[] old = table;
            table = new Node[old.length * 2];
            for (Node head : old) {
                for (Node p = head; p != null; ) {
                    Node next = p.next;
                    int i = index(p.key, table.length);
                    p.next = table[i];
                    table[i] = p;
                    p = next;
                }
            }
        }

        public int get(int key) {
            int i = index(key, table.length);
            for (Node p = table[i]; p != null; p = p.next) {
                if (p.key == key) return p.val;
            }
            return -1;
        }

        public boolean containsKey(int key) {
            int i = index(key, table.length);
            for (Node p = table[i]; p != null; p = p.next) {
                if (p.key == key) return true;
            }
            return false;
        }

        public void remove(int key) {
            int i = index(key, table.length);
            Node dummy = new Node(0, 0, table[i]);
            for (Node p = dummy; p.next != null; p = p.next) {
                if (p.next.key == key) {
                    p.next = p.next.next;
                    size--;
                    break;
                }
            }
            table[i] = dummy.next;
        }

        public int size() {
            return size;
        }
    }

    private static void check(Object a, Object e, String name) {
        if (!java.util.Objects.equals(a, e)) throw new AssertionError(name + " 期望 " + e + "，实际 " + a);
    }
}
