// class DLinkedNode {
//     key: number;
//     value: number;
//     prev: DLinkedNode | null;
//     next: DLinkedNode | null;
//
//     constructor(key = 0, value = 0) {
//         this.key = key;
//         this.value = value;
//         this.prev = null;
//         this.next = null;
//     }
// }

/**
 * 146. LRU 缓存
 * https://leetcode.cn/problems/lru-cache/description/
 * @description 方法一：map结构存储链表节点，节点之间连接顺序为缓存使用顺序。
 */
// class LRUCache {
//     private capacity: number
//     private map: Map<number, DLinkedNode>
//     private head: DLinkedNode
//     private tail: DLinkedNode
//
//     constructor(capacity: number) {
//         this.capacity = capacity
//         this.map = new Map()
//
//         this.head = new DLinkedNode()
//         this.tail = new DLinkedNode()
//         this.head.next = this.tail
//         this.tail.prev = this.head
//     }
//
//     /**
//      * 获取节点并移动至第一个有效节点位置
//      * @param key
//      */
//     get(key: number): number {
//         const node = this.map.get(key)
//         if (!node) return -1
//         this.moveToHead(node)
//         return node.value
//     }
//
//     /**
//      * 添加或者更新一个新节点
//      * @param key
//      * @param value
//      */
//     put(key: number, value: number): void {
//         const node = this.map.get(key)
//
//         if (node) {
//             node.value = value
//             this.moveToHead(node)
//         } else {
//             const newNode = new DLinkedNode(key, value)
//             this.map.set(key, newNode)
//             this.addToHead(newNode)
//
//             if (this.map.size > this.capacity) {
//                 const tail = this.removeTail()
//                 this.map.delete(tail.key)
//             }
//         }
//     }
//
//     /**
//      * 添加节点到第一个有效节点
//      * @param node 被添加的节点
//      */
//     private addToHead(node: DLinkedNode): void {
//         // node左右连接在链表上
//         node.prev = this.head
//         node.next = this.head.next
//         // node左右被原链表连接
//         this.head.next!.prev = node
//         this.head.next = node
//     }
//
//     /**
//      * 删除节点
//      * @param node 被删除的节点
//      */
//     private removeNode(node: DLinkedNode): void {
//         node.prev!.next = node.next
//         node.next!.prev = node.prev
//     }
//
//     /**
//      * 删除一个节点并添加到第一个有效节点
//      * @param node 被删除移动的节点
//      */
//     private moveToHead(node: DLinkedNode): void {
//         this.removeNode(node)
//         this.addToHead(node)
//     }
//
//     /**
//      * 删除最后一个有效节点
//      */
//     private removeTail(): DLinkedNode {
//         const node = this.tail.prev!
//         this.removeNode(node);
//         return node
//     }
// }

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 * 146. LRU 缓存
 * https://leetcode.cn/problems/lru-cache/description/
 * @description 方法二：map结构自带按照插入顺序排列内部属性，所以无需链表结构的引入。
 */
class LRUCache {
    private capacity: number
    private cache: Map<number, number>
    constructor(capacity: number) {
        this.capacity = capacity
        this.cache = new Map()
    }

    get(key: number): number {
        // 这里为了题目写-1，但是实际情况是value可能恰好为-1不够准确
        // 一定要是 has 而不是 get
        if (!this.cache.has(key)) return -1
        const value = this.cache.get(key)!
        this.cache.delete(key)
        this.cache.set(key, value)
        return value
    }

    put(key: number, value: number): void {
        // 一定需要先判断是否存在 key
        if (this.cache.has(key)) {
            this.cache.delete(key)
        } else {
            // 这个 else 写不写都可以，因为如果有key，然后删掉，那么size一定是小于capacity，不会走这个逻辑
            if (this.cache.size >= this.capacity) {
                // 如果执行了上面存在 key 的情况，那么一定不会执行这个超出容量的的情况
                // 实现了迭代器的对象可以直接使用next方法逐个访问value
                this.cache.delete(this.cache.keys().next().value!)
            }
        }
        this.cache.set(key, value);
    }
}

export {}
