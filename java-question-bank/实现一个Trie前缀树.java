import java.util.*;

/**
 * [手写] Trie / 前缀树
 * 每个节点用定长孩子数组 + 是否单词结尾标记，插入/查询都是 O(单词长度)，适合前缀匹配与自动补全。
 */
class MyTrieDemo {
    public static void main(String[] args) {
        Trie t = new Trie();
        t.insert("apple");
        check(t.search("apple"), true, "完整单词");
        check(t.search("app"), false, "只有前缀不算单词");
        check(t.startsWith("app"), true, "前缀匹配");
        check(t.countPrefix("ap"), 1, "前缀计数");
        t.insert("app");
        check(t.search("app"), true, "插入后成为单词");
        check(t.countPrefix("ap"), 2, "前缀计数含新增单词");
        t.erase("app");
        check(t.search("app"), false, "删除后不再是单词");
        check(t.startsWith("apple"), true, "删除不影响更长单词");
        System.out.println("实现一个Trie前缀树 全部通过");
    }

    static class Trie {
        private final Node root = new Node();

        private static class Node {
            Node[] next = new Node[26];
            int pass;
            boolean end;
        }

        public void insert(String word) {
            Node p = root;
            p.pass++;
            for (char c : word.toCharArray()) {
                int k = c - 'a';
                if (p.next[k] == null) p.next[k] = new Node();
                p = p.next[k];
                p.pass++;
            }
            p.end = true;
        }

        public boolean search(String word) {
            Node p = find(word);
            return p != null && p.end;
        }

        public boolean startsWith(String prefix) {
            return find(prefix) != null;
        }

        public int countPrefix(String prefix) {
            Node p = find(prefix);
            return p == null ? 0 : p.pass;
        }

        public void erase(String word) {
            if (!search(word)) return;
            Node p = root;
            p.pass--;
            for (char c : word.toCharArray()) {
                int k = c - 'a';
                if (--p.next[k].pass == 0) {
                    p.next[k] = null;
                    return;
                }
                p = p.next[k];
            }
            p.end = false;
        }

        private Node find(String s) {
            Node p = root;
            for (char c : s.toCharArray()) {
                int k = c - 'a';
                if (p.next[k] == null) return null;
                p = p.next[k];
            }
            return p;
        }
    }

    private static void check(Object a, Object e, String name) {
        if (!java.util.Objects.equals(a, e)) throw new AssertionError(name + " 期望 " + e + "，实际 " + a);
    }
}
