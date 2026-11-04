import java.util.*;

/**
 * [手写] 多线程交替打印
 * synchronized + wait/notifyAll 做线程间协同：用共享状态标记轮到谁，条件不满足就 wait 让出锁。
 * 注意判断条件必须放在 while 里，防止虚假唤醒。
 */
class AlternatePrint {
    public static void main(String[] args) throws Exception {
        final int n = 10;
        List<Integer> out = Collections.synchronizedList(new ArrayList<>());
        Object lock = new Object();
        int[] turn = {1};

        Thread odd = new Thread(() -> {
            for (int i = 1; i <= n; i += 2) {
                synchronized (lock) {
                    while (turn[0] != 1) {
                        try {
                            lock.wait();
                        } catch (InterruptedException e) {
                            Thread.currentThread().interrupt();
                            return;
                        }
                    }
                    out.add(i);
                    turn[0] = 2;
                    lock.notifyAll();
                }
            }
        }, "odd");

        Thread even = new Thread(() -> {
            for (int i = 2; i <= n; i += 2) {
                synchronized (lock) {
                    while (turn[0] != 2) {
                        try {
                            lock.wait();
                        } catch (InterruptedException e) {
                            Thread.currentThread().interrupt();
                            return;
                        }
                    }
                    out.add(i);
                    turn[0] = 1;
                    lock.notifyAll();
                }
            }
        }, "even");

        odd.start();
        even.start();
        odd.join(5000);
        even.join(5000);
        List<Integer> expect = new ArrayList<>();
        for (int i = 1; i <= n; i++) expect.add(i);
        check(out, expect, "奇偶线程严格交替输出 1..10");
        System.out.println("多线程交替打印 全部通过");
    }

    private static void check(Object a, Object e, String name) {
        if (!java.util.Objects.equals(a, e)) throw new AssertionError(name + " 期望 " + e + "，实际 " + a);
    }
}
