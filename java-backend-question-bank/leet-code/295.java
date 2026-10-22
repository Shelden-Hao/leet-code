/**
 * [295. 数据流的中位数](https://leetcode.cn/problems/find-median-from-data-stream/)
 */
class MedianFinder {
    // low 存较小的一半（大顶堆），high 存较大的一半（小顶堆），两堆大小差不超过 1
    PriorityQueue<Integer> low;
    PriorityQueue<Integer> high;

    public MedianFinder() {
        low = new PriorityQueue<>((a, b) -> b - a);
        high = new PriorityQueue<>();
    }

    public void addNum(int num) {
        if (low.isEmpty() || num <= low.peek()) {
            low.add(num);
            if (low.size() >= high.size() + 2) {
                high.add(low.poll());
            }
        } else {
            high.add(num);
            if (high.size() >= low.size() + 2) {
                low.add(high.poll());
            }
        }
    }

    public double findMedian() {
        if ((low.size() + high.size()) % 2 == 0) {
            return (low.peek() + high.peek()) * 0.5;
        }
        return low.size() > high.size() ? low.peek() : high.peek();
    }
}
