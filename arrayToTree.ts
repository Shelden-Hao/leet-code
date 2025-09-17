interface Item {
    id: number
    parentId: number | null
    name: string
    children?: Item[]
}

/**
 * 数组转树形结构
 * @param items
 * @param parentId
 */
function arrayToTree(items: Item[], parentId: number | null = null): Item[] {
    return items
        .filter(item => item.parentId === parentId)
        .map(item => ({
            ...item,
            children: arrayToTree(items, item.id)
        }))
}

// 使用示例
// const arr: Item[] = [
//     { id: 1, parentId: null, name: "根节点1" },
//     { id: 2, parentId: 1, name: "子节点1-1" },
//     { id: 3, parentId: 1, name: "子节点1-2" },
//     { id: 4, parentId: 2, name: "子节点1-1-1" },
//     { id: 5, parentId: null, name: "根节点2" }
// ]
// console.log(JSON.stringify(arrayToTree(arr), null, 2))
