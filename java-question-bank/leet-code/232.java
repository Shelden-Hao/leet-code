/**
 * [232. 用栈实现队列](https://leetcode.cn/problems/implement-queue-using-stacks/)
 * 双栈：入队压 in，出队时若 out 为空则把 in 全部倒入 out，摊还 O(1)
 */
class MyQueue {
    private Deque<Integer> in;
    private Deque<Integer> out;

    public MyQueue() {
        in = new ArrayDeque<>();
        out = new ArrayDeque<>();
    }

    public void push(int x) {
        in.push(x);
    }

    public int pop() {
        move();
        return out.pop();
    }

    public int peek() {
        move();
        return out.peek();
    }

    public boolean empty() {
        return in.isEmpty() && out.isEmpty();
    }

    private void move() {
        if (out.isEmpty()) {
            while (!in.isEmpty()) out.push(in.pop());
        }
    }
}
