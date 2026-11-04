import java.util.*;

/**
 * [手写] 快速排序
 * 随机枢轴 + 三路划分（< / == / >）：有序数组不会退化成 O(n^2)，重复元素多时也更快。
 */
class QuickSort {
    public static void main(String[] args) {
        Random rnd = new Random(2026);
        for (int round = 0; round < 200; round++) {
            int n = rnd.nextInt(300);
            int[] a = new int[n], b = new int[n];
            for (int i = 0; i < n; i++) a[i] = rnd.nextInt(50) - 25;
            System.arraycopy(a, 0, b, 0, n);
            sort(a);
            Arrays.sort(b);
            if (!Arrays.equals(a, b)) throw new AssertionError("第 " + round + " 轮随机对拍失败");
        }
        int[] ordered = new int[100000];
        for (int i = 0; i < ordered.length; i++) ordered[i] = i;
        sort(ordered);
        for (int i = 0; i < ordered.length; i++) {
            if (ordered[i] != i) throw new AssertionError("10 万个有序元素的退化用例失败");
        }
        System.out.println("快速排序 全部通过（200 轮随机对拍 + 10 万有序用例）");
    }

    public static void sort(int[] a) {
        if (a == null || a.length < 2) return;
        Random shuffleRnd = new Random(42);
        for (int i = a.length - 1; i > 0; i--) {
            int j = shuffleRnd.nextInt(i + 1);
            swap(a, i, j);
        }
        quick(a, 0, a.length - 1);
    }

    private static void quick(int[] a, int lo, int hi) {
        if (lo >= hi) return;
        int pivot = a[lo + (int) (Math.random() * (hi - lo + 1))];
        int lt = lo, i = lo, gt = hi;
        while (i <= gt) {
            if (a[i] < pivot) swap(a, lt++, i++);
            else if (a[i] > pivot) swap(a, i, gt--);
            else i++;
        }
        quick(a, lo, lt - 1);
        quick(a, gt + 1, hi);
    }

    private static void swap(int[] a, int i, int j) {
        int t = a[i];
        a[i] = a[j];
        a[j] = t;
    }
}
