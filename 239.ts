/**
 * 滑动窗口最大值
 * @param nums 原始数组
 * @param k 滑动窗口的宽度
 */
function maxSlidingWindow(nums: number[], k: number): number[] {
    // 创建一个双端队列 每个元素都是索引
    // 双端队列，队列的两端都可以进行新增和删除
    const deque:number[] = []
    const length = nums.length
    const res: number[] = []

    // 依次遍历所有元素
    for (let i = 0; i < length; i++) {
        // 判断队尾：队列不为空 并且新加入的元素要比原来尾部的元素要大
        while (deque.length && nums[i] > nums[deque[deque.length - 1]]) {
            deque.pop()
        }
        // 加入索引元素：将当前比较大的元素的索引加入
        deque.push(i)
        // 判断队头：同时还得判断队头的元素索引是否还在滑动窗口中 是否比当前索引和滑动窗口的宽度要小
        while (deque[0] <= i - k) {
            deque.shift()
        }
        // 判断开始滑动情况：考虑最开始的情况，只有开始满足一个滑动窗口的时候 才开始滑动
        if (i >= k - 1) {
            // 当前一轮遍历的最大值就是当前一轮滑动窗口的最大值
            res.push(nums[deque[0]]);
        }
    }

    return res
};