/**
 * 452. 用最少数量的箭引爆气球
 * https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/description/
 * @param points
 * @description 贪心。
 * 贪心最优：先考虑右端点最小的气球，只要在它的右端点位置射一箭，就能保证射爆它，同时也可能覆盖后续与它有交集的气球。
 * 所以通过右端点排序，不断通过当前箭的位置和下个气球左端点对比，更新箭的数量和位置。
 */
function findMinArrowShots(points: number[][]): number {
    if (points.length === 0) return 0

    // 按右端点排序
    points.sort((a, b) => a[1] - b[1])

    // 需要箭的数量
    let arrows = 1
    // 当前箭(最后一支箭)射到的位置
    let arrowPosition = points[0][1]

    for (let i = 1; i < points.length; i++) {
        let [start, end] = points[i]
        // 当前气球的左端点大于上一支箭的位置，则还需要发出一支箭
        if (start > arrowPosition) {
            arrows++
            arrowPosition = end
        }
    }
    return arrows
};

export {}
