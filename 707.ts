class MyListNode {
    public val: number
    public next: MyListNode | null
    constructor(val?: number, next?: MyListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

class MyLinkedList {
    private head: MyListNode | null = null
    private size: number = 0

    constructor() {}

    get(index: number): number {
        if (index <0 && index >= this.size) return -1
        if (index === 0) {
            return this.head!.val
        } else {
            let current = this.head
            let previous : MyListNode | null = null
            while (index) {
                index--
                previous = current
                current = current!.next
            }
            return current!.val
        }
    }

    // 在链表头添加节点
    addAtHead(val: number): void {
        const newNode = new MyListNode(val)
        if (!this.head) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    // 从尾部追加节点
    addAtTail(val: number): void {
        const listNode= new MyListNode(val)
        if (!this.head) {
            // 没有节点则直接让头节点指向listNode
            this.head = listNode
        } else {
            // 否则移动current节点一直到最后一个节点
            let current = this.head
            while (current.next) {
                current = current.next
            }
            // 让listNode作为新的尾节点
            current.next = listNode
        }
        // 长度++
        this.size++
    }

    addAtIndex(index: number, val: number): void {
        // 边界判断
        if (index < 0 || index > this.size) return

        // 创建新节点
        const newNode = new MyListNode(val)

        // 判断插入位置
        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let current = this.head
            let previous: MyListNode | null = null
            while (index) {
                index--
                previous = current
                current = current!.next
            }
            // current此时指向的就是需要被插入的位置
            newNode.next = current
            previous!.next = newNode
        }
        this.size++
    }

    deleteAtIndex(index: number): void {
        // 边界判断
        if (index < 0 || index >= this.size) return

        // 判断是否删除的index
        if (index === 0) {
            this.head = this.head!.next
        } else {
            let current = this.head
            let previous : MyListNode | null = null
            while (index) {
                index--
                previous = current
                current = current!.next
            }
            previous!.next = current!.next
        }
    }

    // 获取链表长度
    get length() {
        return this.size
    }

    // 遍历链表的方法
    traverse() {
        const values:number[] = []
        let current = this.head
        while (current) {
            values.push(current.val)
            current = current.next
        }
        console.log(values.join('->'));
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
const list = new MyLinkedList()
list.addAtTail(333)
list.addAtTail(444)
list.addAtIndex(0, 111)
list.addAtHead( 222)
list.deleteAtIndex(1)
list.traverse()
console.log(list.get(1));
