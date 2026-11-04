import java.util.*;
import java.util.concurrent.*;

/**
 * [手写] 单例模式
 * 三种生产可用写法：DCL（volatile 禁止指令重排）、静态内部类（懒加载且由 JVM 保证线程安全）、枚举（天然防反射与反序列化破坏）。
 */
class SingletonPatterns {
    public static void main(String[] args) throws Exception {
        int threads = 32;
        ExecutorService pool = Executors.newFixedThreadPool(threads);
        Set<DclSingleton> instances = ConcurrentHashMap.newKeySet();
        CountDownLatch start = new CountDownLatch(1);
        CountDownLatch done = new CountDownLatch(threads);
        for (int i = 0; i < threads; i++) {
            pool.execute(() -> {
                try {
                    start.await();
                    instances.add(DclSingleton.getInstance());
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                } finally {
                    done.countDown();
                }
            });
        }
        start.countDown();
        done.await();
        pool.shutdown();
        check(instances.size(), 1, "DCL 在 32 线程并发下只创建一个实例");
        check(InnerSingleton.getInstance() == InnerSingleton.getInstance(), true, "静态内部类单例");
        check(EnumSingleton.INSTANCE == EnumSingleton.INSTANCE, true, "枚举单例");
        System.out.println("单例模式 全部通过");
    }

    static class DclSingleton {
        private static volatile DclSingleton instance;

        private DclSingleton() {
        }

        public static DclSingleton getInstance() {
            if (instance == null) {
                synchronized (DclSingleton.class) {
                    if (instance == null) instance = new DclSingleton();
                }
            }
            return instance;
        }
    }

    static class InnerSingleton {
        private InnerSingleton() {
        }

        private static class Holder {
            private static final InnerSingleton INSTANCE = new InnerSingleton();
        }

        public static InnerSingleton getInstance() {
            return Holder.INSTANCE;
        }
    }

    enum EnumSingleton {
        INSTANCE
    }

    private static void check(Object a, Object e, String name) {
        if (!java.util.Objects.equals(a, e)) throw new AssertionError(name + " 期望 " + e + "，实际 " + a);
    }
}
