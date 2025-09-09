/**
 * 435. 无重叠区间
 * https://leetcode.cn/problems/non-overlapping-intervals/description/
 * @param intervals
 * @description 贪心。按区间的右端点 end 升序排列。这样每次选择的区间结束最早，留给后面更多空间。
 * 题干说明：注意 只在一点上接触的区间是 不重叠的。
 */
function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length === 0) return 0
    // 按右端点排序 寻找最大覆盖
    intervals.sort((a, b) => a[1] - b[1])
    // 不重叠区间数
    let count = 1
    let preEnd = intervals[0][1]
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i]
        if (start >= preEnd) {
            // 没有重叠，可以选择
            count++
            preEnd = end
        }
        // 只要有重叠就 pass，不管他与后面的还有没有重叠
    }
    return intervals.length - count
};

// 📌 直观比喻
// 想象你要安排会议室：
// 每个区间 = 一个会议占用的时间段。
// 你要尽量安排更多的会议（不冲突）。
// 如果你优先安排“早开始的会议”，有可能它占得太久，卡掉后面很多会议。 ==> 尽可能合并区间（题56）
// 如果你优先安排“早结束的会议”，那就能空出更多时间，方便后面再排更多会议。
// 所以我们排序时选 结束时间（右端点）最小的先处理，能保证最优解。

export {}
