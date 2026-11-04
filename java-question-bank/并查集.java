import java.util.*;

/**
 * [手写/通用] 并查集
 * 路径压缩 + 按集合大小合并，单次操作摊还接近 O(1)，用于动态连通性、岛屿计数、等式约束。
 */
class UnionFindDemo {
    public static void main(String[] args) {
        UnionFindSet uf = new UnionFindSet(10);
        uf.union(1, 2);
        uf.union(2, 3);
        uf.union(4, 5);
        check(uf.connected(1, 3), true, "传递连通");
        check(uf.connected(1, 5), false, "不同集合");
        check(uf.count(), 7, "初始 10 个点合并 3 次后剩 7 个集合");
        uf.union(3, 5);
        check(uf.connected(1, 4), true, "合并后连通");
        check(uf.size(1), 5, "集合大小");
        System.out.println("并查集 全部通过");
    }

    static class UnionFindSet {
        private final int[] parent;
        private final int[] size;
        private int count;

        UnionFindSet(int n) {
            parent = new int[n];
            size = new int[n];
            count = n;
            for (int i = 0; i < n; i++) {
                parent[i] = i;
                size[i] = 1;
            }
        }

        public int find(int x) {
            if (parent[x] != x) parent[x] = find(parent[x]);
            return parent[x];
        }

        public void union(int a, int b) {
            int ra = find(a), rb = find(b);
            if (ra == rb) return;
            if (size[ra] < size[rb]) {
                int t = ra;
                ra = rb;
                rb = t;
            }
            parent[rb] = ra;
            size[ra] += size[rb];
            count--;
        }

        public boolean connected(int a, int b) {
            return find(a) == find(b);
        }

        public int size(int x) {
            return size[find(x)];
        }

        public int count() {
            return count;
        }
    }

    private static void check(Object a, Object e, String name) {
        if (!java.util.Objects.equals(a, e)) throw new AssertionError(name + " 期望 " + e + "，实际 " + a);
    }
}
