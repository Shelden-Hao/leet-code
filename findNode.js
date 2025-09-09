const tree = [
    {
        id: 1,
        name: "A",
        children: [
            {
                id: 2,
                name: "B",
                children: [
                    { id: 4, name: "D" },
                    { id: 5, name: "E" }
                ]
            },
            { id: 3, name: "C" }
        ]
    }
];

/**
 * 树形结构根据id找到节点 - 递归 DFS
 * @param tree
 * @param id
 * @return {*|null}
 */
function findNodeDFS(tree, id) {
    for (let node of tree) {
        if (node.id === id) return node
        if (node.children) return findNodeDFS(node.children, id)
    }
    return null
}

/**
 * 树形结构根据id找到节点 - 迭代 DFS（用栈）
 * @param tree
 * @param id
 * @return {*|null}
 */
function findNodeStack(tree, id) {
    const stack = [...tree]
    while (stack.length) {
        const node = stack.pop()
        if (node.id === id) return node
        if (node.children) stack.push(...node.children)
    }
    return null
}

/**
 * 树形结构根据id找到节点 - BFS（用队列）
 * @param tree
 * @param id
 * @return {*|null}
 */
function findNodeBFS(tree, id) {
    const queue = [...tree];
    while (queue.length) {
        const node = queue.shift();
        if (node.id === id) return node;
        if (node.children) queue.push(...node.children);
    }
    return null;
}

// console.log(findNodeStack(tree, 5));
// { id: 5, name: "E" }

export {}
