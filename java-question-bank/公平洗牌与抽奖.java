import java.util.*;

/**
 * [手写] 公平洗牌 / 按权重抽奖
 * Fisher-Yates：从后往前，每次在 [0, i] 上等概率选一个交换，保证 n! 种排列等概率；
 * 加权抽奖：按权重前缀和划分区间，随机数落在哪段就中哪个。
 */
class FairShuffleAndLottery {
    public static void main(String[] args) {
        int[] a = {1, 2, 3, 4, 5};
        shuffle(a);
        int[] copy = a.clone();
        Arrays.sort(copy);
        check(Arrays.toString(copy), "[1, 2, 3, 4, 5]", "洗牌后仍是原排列（不丢不重）");

        int n = 5, rounds = 20000;
        int[] posCount = new int[n];
        Random r = new Random(17);
        for (int t = 0; t < rounds; t++) {
            int[] arr = {0, 1, 2, 3, 4};
            shuffle(arr, r);
            for (int i = 0; i < n; i++) {
                if (arr[i] == 0) posCount[i]++;
            }
        }
        for (int c : posCount) {
            if (Math.abs(c - rounds / n) > rounds / n * 0.15) {
                throw new AssertionError("洗牌位置分布不均 " + Arrays.toString(posCount));
            }
        }

        int[] weights = {10, 20, 70};
        int[] hits = new int[3];
        for (int t = 0; t < rounds; t++) hits[draw(weights, r)]++;
        for (int i = 0; i < 3; i++) {
            double actual = hits[i] / (double) rounds;
            double expect = weights[i] / 100.0;
            if (Math.abs(actual - expect) > 0.02) {
                throw new AssertionError("抽奖概率偏差过大 " + Arrays.toString(hits));
            }
        }
        System.out.println("公平洗牌与抽奖 全部通过（2 万次分布检验）");
    }

    public static void shuffle(int[] a) {
        shuffle(a, new Random());
    }

    public static void shuffle(int[] a, Random r) {
        for (int i = a.length - 1; i > 0; i--) {
            int j = r.nextInt(i + 1);
            int t = a[i];
            a[i] = a[j];
            a[j] = t;
        }
    }

    public static int draw(int[] weights, Random r) {
        int total = 0;
        for (int w : weights) total += w;
        int x = r.nextInt(total) + 1;
        for (int i = 0; i < weights.length; i++) {
            x -= weights[i];
            if (x <= 0) return i;
        }
        return weights.length - 1;
    }

    private static void check(Object a, Object e, String name) {
        if (!java.util.Objects.equals(a, e)) throw new AssertionError(name + " 期望 " + e + "，实际 " + a);
    }
}
