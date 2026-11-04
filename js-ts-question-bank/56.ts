/**
 * 56. 合并区间
 * https://leetcode.cn/problems/merge-intervals/
 * @param intervals 包含各个区间的二维数组
 */
function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0])

    const merged: number[][] = []
    for (let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i]

        // 不重叠：merged 没有元素 或者是 最后一个区间的尾项要比当前区间的首项小，则将完整区间push 进去
        if (merged.length === 0 || start > merged[merged.length - 1][1]) {
            merged.push(intervals[i])
        } else {
            // 重叠，则更新 merged 最后一个区间的尾项（取两个区间最大的尾项）
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], end)
        }
    }

    return merged
};

export {}
