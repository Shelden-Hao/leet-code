import java.lang.reflect.Proxy;
import java.util.*;
import java.util.function.Function;

/**
 * [手写] 装饰器
 * Java 没有 Python 那种 @decorator 语法，等价做法是「函数包装」和「JDK 动态代理」：
 * 在不改动原对象的前提下，前置/后置加日志、计时、鉴权等横切逻辑，就是 Spring AOP 的雏形。
 */
class DecoratorPattern {
    public static void main(String[] args) {
        List<String> log = new ArrayList<>();
        Function<Integer, Integer> core = x -> x * 2;
        Function<Integer, Integer> decorated = decorate(core, "日志+计时", log);
        check(decorated.apply(5), 10, "装饰后返回值与原始函数一致");
        check(log.size(), 2, "前置与后置各记录一次");
        check(log.get(0).startsWith("before"), true, "前置日志顺序");

        Greeter proxy = (Greeter) Proxy.newProxyInstance(
                Greeter.class.getClassLoader(),
                new Class[]{Greeter.class},
                (p, method, params) -> {
                    log.add("proxy-before");
                    Object res = method.invoke(new RealGreeter(), params);
                    log.add("proxy-after");
                    return res;
                });
        check(proxy.hello("秀秀"), "hello 秀秀", "动态代理转发结果");
        check(log.contains("proxy-before") && log.contains("proxy-after"), true, "代理的环绕通知");
        System.out.println("实现一个装饰器 全部通过");
    }

    public static <T, R> Function<T, R> decorate(Function<T, R> fn, String tag, List<String> log) {
        return x -> {
            log.add("before:" + tag);
            try {
                return fn.apply(x);
            } finally {
                log.add("after:" + tag);
            }
        };
    }

    interface Greeter {
        String hello(String name);
    }

    static class RealGreeter implements Greeter {
        public String hello(String name) {
            return "hello " + name;
        }
    }

    private static void check(Object a, Object e, String name) {
        if (!java.util.Objects.equals(a, e)) throw new AssertionError(name + " 期望 " + e + "，实际 " + a);
    }
}
