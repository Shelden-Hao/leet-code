/** 最小堆 */
class MinHeap<T> {
  private data: T[] = [];
  private size: number = 0;
  private swap(i: number, j: number) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  insert(value: T) {
    this.data.push(value);
    this.size++;
    this.heapify_up();
  }

  delete(): T | null {
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.size--;
      return this.data.pop()!;
    }
    const root = this.data[0];
    this.data[0] = this.data[this.size - 1];
    this.data.pop();
    this.size--;
    this.heapify_down();
    return root;
  }

  heapify_up() {
    let index = this.size - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.data[index] >= this.data[parentIndex]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  heapify_down() {
    let index = 0;
    while (2 * index + 1 < this.size) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallestIndex = leftChildIndex;

      if (
        rightChildIndex < this.size &&
        this.data[leftChildIndex] > this.data[rightChildIndex]
      ) {
        smallestIndex = rightChildIndex;
      }
      if (this.data[index] <= this.data[smallestIndex]) break;
      this.swap(index, smallestIndex);
      index = smallestIndex;
    }
  }

  getMin(): T | null {
    return this.data[0];
  }

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getData(): T[] {
    return this.data;
  }
}

/**
 * 1353. 最多可以参加的会议数目
 * https://leetcode.cn/problems/maximum-number-of-events-that-can-be-attended/description/
 * @description 开始时间排序，结束时间放入堆（用于判断参加哪场会议）。类似堆的应用可以看：面试题 17.14. 最小K个数
 * @param events 所有的会议
 * @returns 最多可以参加的会议
 */
function maxEvents(events: number[][]): number {
    if (events.length === 0) return 0;
    events.sort((a, b) => a[0] - b[0]);
    const heap = new MinHeap<number>();
    // 用 i 表示遍历会议的索引
    let i = 0
    const n = events.length
    let attended = 0
    // 当前的天数(会议的最早开始时间)
    let day = events[0][0]
    // 只要还有未处理的会议或者堆里还有候选会议，就继续工作
    while (i < n || !heap.isEmpty()) {
        // 把所有开始时间小于等于当天的会议(即今天可以参加的会)加入到堆中，i<n主要防止数组越界
        while (i < n && events[i][0] <= day) {
            heap.insert(events[i][1])
            i++
        }
        // 在最终决定今天参加哪个会议之前，移除堆中已经过期的会议(结束时间小于当天)
        while (!heap.isEmpty()) {
            const minEnd = heap.getMin()
            // minEnd不为空的判断主要是保证类型安全
            if (minEnd !== null && minEnd < day) {
                heap.delete()
            } else {
                break
            }
        }
        // 如果有可以参加的会议，参加结束最早的那个会议
        if (!heap.isEmpty()) {
            heap.delete()
            attended++
            day++
        } else {
            // 堆空但是还有未加入的会议，直接跳到下一天
            if (i < n) {
                day = events[i][0]
            }
        }
    }
    return attended
}