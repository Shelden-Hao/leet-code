/**
 * 435. 无重叠区间
 * https://leetcode.cn/problems/non-overlapping-intervals/description/
 * @param intervals
 * @description 贪心。按区间的右端点 end 升序排列。这样每次选择的区间结束最早，留给后面更多空间。
 * 题干说明：注意 只在一点上接触的区间是 不重叠的。
 * - 452 是「最少射箭」 → 挑选最少的点覆盖所有区间。
 * - 435 是「最少移除」 → 相当于挑选最多的不重叠区间，剩下的(返回值)移除。
 */
function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length === 0) return 0
    // 按右端点排序
    intervals.sort((a, b) => a[0] - b[0])
    // 至少能选一个区间
    let count = 1
    let prePosition = intervals[0][1]
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i]
        if (start >= prePosition) {
            // 没有重叠，可以选择
            count++
            prePosition = end
        }
    }
    return intervals.length - count
};

export {}
