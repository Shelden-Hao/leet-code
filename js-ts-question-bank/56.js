/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    // 1. 按照区间的起始位置排序
    intervals.sort((a, b) => a[0] - b[0]);

    // 2. 初始化结果数组，添加第一个区间
    const merged = [intervals[0]];

    // 3. 遍历区间进行合并
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const lastMerged = merged[merged.length - 1];

        // 如果当前区间的起始位置大于最后一个合并区间的结束位置，直接添加
        if (current[0] > lastMerged[1]) {
            merged.push(current);
        } else {
            // 否则，更新最后一个合并区间的结束位置
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        }
    }

    return merged;
};
