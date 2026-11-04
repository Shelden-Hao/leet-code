/**
 * 【浮层遮挡】
 *
 * 页面上有若干个浮层，每个浮层在纵向盖住一段像素，用 [start, end] 表示——
 * 左闭右开，start 和 end 都是整数。浮层之间可能互相重叠。
 *
 * 写一个函数，返回被至少两个浮层同时盖住的总像素高度。
 *
 * 示例：
 * overlapHeight([[0, 30], [20, 50], [40, 60]])  // -> 20
 *   // 20-30 被前两个浮层盖住（10 像素），40-50 被后两个盖住（10 像素）。合计 20
 * overlapHeight([[0, 100]])                     // -> 0
 * overlapHeight([[0, 40], [10, 20], [15, 25]])  // -> 15
 */

/**
 * 浮层遮挡：返回被至少两个浮层同时盖住的总像素高度。
 * 区间语义为左闭右开 [start, end)。
 *
 * 解法：扫描线 + 重叠计数（O(n log n)）
 *   1. 把每个区间拆成两个事件：进入 (+1)、离开 (-1)
 *   2. 按位置排序；位置相同时，离开(-1) 排在 进入(+1) 之前
 *      ——因为区间是左闭右开，end 那个点已经不被覆盖
 *   3. 从左到右扫，维护当前覆盖层数 count，
 *      当 count >= 2 时，把 [prev, pos) 的长度累加进结果
 */
function overlapHeight(intervals: Array<[number, number]>): number {
  type Event = { pos: number; delta: number };

  const events: Event[] = [];
  for (const [s, e] of intervals) {
    events.push({ pos: s, delta: 1 });   // 进入
    events.push({ pos: e, delta: -1 });  // 离开
  }

  // 排序：位置升序；位置相同则 -1 在前、+1 在后
  events.sort((a, b) => {
    if (a.pos !== b.pos) return a.pos - b.pos;
    return a.delta - b.delta;
  });

  let res = 0;
  let count = 0;
  let prev: number | null = null;

  for (const { pos, delta } of events) {
    if (prev !== null && count >= 2) {
      res += pos - prev; // 这段被至少两个浮层覆盖
    }
    count += delta;
    prev = pos;
  }

  return res;
}

// ---- 测试用例 ----
console.log(overlapHeight([[0, 30], [20, 50], [40, 60]])); // 20
console.log(overlapHeight([[0, 100]]));                     // 0
console.log(overlapHeight([[0, 40], [10, 20], [15, 25]])); // 15
