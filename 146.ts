class DLinkedNode {
    key: number;
    value: number;
    prev: DLinkedNode | null;
    next: DLinkedNode | null;

    constructor(key = 0, value = 0) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    private capacity: number
    private map: Map<number, DLinkedNode>
    private head: DLinkedNode
    private tail: DLinkedNode

    constructor(capacity: number) {
        this.capacity = capacity
        this.map = new Map()

        this.head = new DLinkedNode()
        this.tail = new DLinkedNode()
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    /**
     * 获取节点并移动至第一个有效节点位置
     * @param key
     */
    get(key: number): number {
        const node = this.map.get(key)
        if (!node) return -1
        this.moveToHead(node)
        return node.value
    }

    /**
     * 添加或者更新一个新节点
     * @param key
     * @param value
     */
    put(key: number, value: number): void {
        const node = this.map.get(key)

        if (node) {
            node.value = value
            this.moveToHead(node)
        } else {
            const newNode = new DLinkedNode(key, value)
            this.map.set(key, newNode)
            this.addToHead(newNode)

            if (this.map.size > this.capacity) {
                const tail = this.removeTail()
                this.map.delete(tail.key)
            }
        }
    }

    /**
     * 添加节点到第一个有效节点
     * @param node 被添加的节点
     */
    private addToHead(node: DLinkedNode): void {
        // node左右连接在链表上
        node.prev = this.head
        node.next = this.head.next
        // node左右被原链表连接
        this.head.next!.prev = node
        this.head.next = node
    }

    /**
     * 删除节点
     * @param node 被删除的节点
     */
    private removeNode(node: DLinkedNode): void {
        node.prev!.next = node.next
        node.next!.prev = node.prev
    }

    /**
     * 删除一个节点并添加到第一个有效节点
     * @param node 被删除移动的节点
     */
    private moveToHead(node: DLinkedNode): void {
        this.removeNode(node)
        this.addToHead(node)
    }

    /**
     * 删除最后一个有效节点
     */
    private removeTail(): DLinkedNode {
        const node = this.tail.prev!
        this.removeNode(node);
        return node
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export {}
