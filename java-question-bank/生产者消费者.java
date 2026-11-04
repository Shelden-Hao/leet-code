import java.util.*;

/**
 * [手写] 生产者消费者
 * 用 synchronized + wait/notifyAll 手写有界缓冲区：队列满时生产者等待，队列空时消费者等待。
 * 条件判断必须用 while（防止虚假唤醒），唤醒用 notifyAll（避免同类线程互相唤醒导致死锁）。
 */
class ProducerConsumer {
    static class Buffer {
        private final Queue<Integer> q = new ArrayDeque<>();
        private final int cap;

        Buffer(int cap) {
            this.cap = cap;
        }

        public synchronized void put(int v) throws InterruptedException {
            while (q.size() == cap) wait();
            q.offer(v);
            notifyAll();
        }

        public synchronized int take() throws InterruptedException {
            while (q.isEmpty()) wait();
            int v = q.poll();
            notifyAll();
            return v;
        }
    }

    public static void main(String[] args) throws Exception {
        final int items = 2000;
        Buffer buffer = new Buffer(8);
        List<Integer> consumed = Collections.synchronizedList(new ArrayList<>());

        Thread producer = new Thread(() -> {
            for (int i = 0; i < items; i++) {
                try {
                    buffer.put(i);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    return;
                }
            }
        }, "producer");

        Thread consumer = new Thread(() -> {
            for (int i = 0; i < items; i++) {
                try {
                    consumed.add(buffer.take());
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    return;
                }
            }
        }, "consumer");

        producer.start();
        consumer.start();
        producer.join(10000);
        consumer.join(10000);
        check(consumed.size(), items, "生产 2000 条全部被消费");
        for (int i = 0; i < items; i++) {
            if (consumed.get(i) != i) throw new AssertionError("FIFO 顺序错乱，位置 " + i);
        }
        System.out.println("生产者消费者 全部通过（2000 条消息 FIFO 有序消费）");
    }

    private static void check(Object a, Object e, String name) {
        if (!java.util.Objects.equals(a, e)) throw new AssertionError(name + " 期望 " + e + "，实际 " + a);
    }
}
