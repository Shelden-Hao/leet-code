/**
 * 最大堆的封装实现
 */
class MaxHeap<T> {
  private data: T[] = [];
  private size: number = 0;
  private swap(i: number, j: number) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  /** 插入一个元素 */
  insert(value: T) {
    this.data.push(value);
    this.size++;
    this.heapify_up();
  }

  /** 删除最大元素 */
  delete(): T | null {
    // 没有元素或者只有一个元素，直接返回null
    if (this.size === 0) return null
    if (this.size === 1) {
        this.size--
        return this.data.pop()!
    }
    // 获取要删除的元素
    const max = this.data[0]
    this.data[0] = this.data.pop()!
    this.size--
    this.heapify_down()
    return max
  }

  /** 上滤 */
  heapify_up() {
    let index = this.size - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.data[index] <= this.data[parentIndex]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  /** 下滤 */
  heapify_down() {
    let index = 0
    while (2 * index + 1 < this.size) {
        let leftChildIndex = 2 * index + 1
        let rightChildIndex = 2 * index + 2
        // 获取左右子节点中较大值的索引
        let largerIndex = leftChildIndex
        if (rightChildIndex < this.size && this.data[rightChildIndex] > this.data[leftChildIndex]) {
            largerIndex = rightChildIndex
        }
        if (this.data[index] >= this.data[largerIndex]) {
            break
        }
        this.swap(index, largerIndex)
        index = largerIndex
    }
  }

  // TODO: 原地建堆

  peek(): T | null {
    return this.data[0] ?? null
  }

  isEmpty(): boolean {
    return this.data.length === 0
  }

  get length(): number {
    return this.size
  }

  get value(): T[] {
    return this.data
  }
}

/**
 * 面试题 17.14. 最小K个数
 * https://leetcode.cn/problems/smallest-k-lcci/description/
 * @param arr 原数组
 * @param k 
 * @returns 最小的那k个数
 */
function smallestK(arr: number[], k: number): number[] {
  if (k === 0) return []
  const heap = new MaxHeap<number>()
  for (const num of arr) {
    if (heap.length < k) {
        heap.insert(num)
    } else if (num < heap.value[0]) {
        heap.delete()
        heap.insert(num)
    }
  }
  return heap.value
};