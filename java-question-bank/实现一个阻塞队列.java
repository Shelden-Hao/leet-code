import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * [手写] 有界阻塞队列
 * 数组双端队列 + synchronized + wait/notifyAll：容量满阻塞 put，队列空阻塞 take。
 * 这是 ArrayBlockingQueue 的核心原理（JDK 里用 ReentrantLock + 两个 Condition 做更细粒度的唤醒）。
 */
class MyBlockingQueueDemo {
    static class BoundedQueue<E> {
        private final ArrayDeque<E> q;
        private final int cap;

        BoundedQueue(int cap) {
            this.cap = cap;
            this.q = new ArrayDeque<>(cap);
        }

        public synchronized void put(E e) throws InterruptedException {
            while (q.size() == cap) wait();
            q.addLast(e);
            notifyAll();
        }

        public synchronized E take() throws InterruptedException {
            while (q.isEmpty()) wait();
            E e = q.removeFirst();
            notifyAll();
            return e;
        }

        public synchronized int size() {
            return q.size();
        }

        public synchronized boolean isEmpty() {
            return q.isEmpty();
        }
    }

    public static void main(String[] args) throws Exception {
        BoundedQueue<Integer> q = new BoundedQueue<>(4);
        check(q.size(), 0, "初始为空");
        q.put(1);
        q.put(2);
        check(q.take(), 1, "FIFO 第一个");
        check(q.take(), 2, "FIFO 第二个");
        check(q.isEmpty(), true, "取完后队列为空");

        final int producers = 3, perProducer = 1000, total = producers * perProducer;
        BoundedQueue<Integer> bq = new BoundedQueue<>(16);
        AtomicInteger sum = new AtomicInteger();
        List<Thread> threads = new ArrayList<>();
        for (int p = 0; p < producers; p++) {
            final int base = p * perProducer;
            threads.add(new Thread(() -> {
                for (int i = 0; i < perProducer; i++) {
                    try {
                        bq.put(base + i);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                        return;
                    }
                }
            }, "producer-" + p));
        }
        for (int c = 0; c < 3; c++) {
            threads.add(new Thread(() -> {
                for (int i = 0; i < perProducer; i++) {
                    try {
                        sum.addAndGet(bq.take());
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                        return;
                    }
                }
            }, "consumer-" + c));
        }
        for (Thread t : threads) t.start();
        for (Thread t : threads) t.join(15000);
        int expect = 0;
        for (int i = 0; i < total; i++) expect += i;
        check(sum.get(), expect, "3 生产者 3 消费者共 3000 条，不丢不重");
        check(bq.isEmpty(), true, "全部消费完后队列为空");
        System.out.println("实现一个阻塞队列 全部通过（3 生产者 + 3 消费者并发压测）");
    }

    private static void check(Object a, Object e, String name) {
        if (!java.util.Objects.equals(a, e)) throw new AssertionError(name + " 期望 " + e + "，实际 " + a);
    }
}
