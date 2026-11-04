import java.math.BigInteger;
import java.util.*;

/**
 * [手写] 大数加法
 * 数字超出 long 范围时按字符串从低位逐位相加，维护进位；结果去掉前导零。
 */
class BigNumberAdd {
    public static void main(String[] args) {
        check(add("999", "1"), "1000", "连续进位");
        check(add("0", "0"), "0", "零");
        check(add("00012", "003"), "15", "前导零");
        Random r = new Random(7);
        for (int i = 0; i < 500; i++) {
            String a = new BigInteger(80, r).toString();
            String b = new BigInteger(80, r).toString();
            String expect = new BigInteger(a).add(new BigInteger(b)).toString();
            if (!add(a, b).equals(expect)) throw new AssertionError("对拍失败 " + a + " + " + b);
        }
        System.out.println("大数加法 全部通过（500 轮 BigInteger 对拍）");
    }

    public static String add(String a, String b) {
        int i = a.length() - 1, j = b.length() - 1, carry = 0;
        StringBuilder sb = new StringBuilder();
        while (i >= 0 || j >= 0 || carry > 0) {
            int x = i >= 0 ? a.charAt(i--) - '0' : 0;
            int y = j >= 0 ? b.charAt(j--) - '0' : 0;
            int sum = x + y + carry;
            sb.append((char) ('0' + sum % 10));
            carry = sum / 10;
        }
        String res = sb.reverse().toString();
        int k = 0;
        while (k < res.length() - 1 && res.charAt(k) == '0') k++;
        return res.substring(k);
    }

    private static void check(Object a, Object e, String name) {
        if (!java.util.Objects.equals(a, e)) throw new AssertionError(name + " 期望 " + e + "，实际 " + a);
    }
}
