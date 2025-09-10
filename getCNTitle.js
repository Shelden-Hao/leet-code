const json = {
    enTitle: 'title1',
    cnTitle: '书名1',
    child: [
        {
            enTitle: 'title2',
            cnTitle: '书名2',
            child: [
                {
                    enTitle: 'title3',
                    cnTitle: '书名3',
                    child: []
                }
            ]
        },
        {
            enTitle: 'title4',
            cnTitle: '书名4',
        }
    ]
};

/**
 * 给一个树形结构的 JSON 数据，每个节点包含英文名 enTitle 和中文名 cnTitle，以及可能的子节点 child。
 * 需要实现一个函数 getCNTitle(data, enTitle)，输入树形结构数据和英文名，返回对应的中文名，如果找不到返回 null。
 * @param data
 * @param enTitle
 * @return {string|*|null}
 */
function getCNTitle(data, enTitle) {
    if (data.enTitle === enTitle) {
        return data.cnTitle
    }
    if (data.child && data.child.length > 0) {
        for (let child of data.child) {
            const result = getCNTitle(child, enTitle)
            if (result !== null) {
                return result
            }
        }
    }
    return null
}

// console.log(getCNTitle(json, 'title1')); // 输出: "书名1"
// console.log(getCNTitle(json, 'title3')); // 输出: "书名3"
// console.log(getCNTitle(json, 'title4')); // 输出: "书名4"
// console.log(getCNTitle(json, 'titleX')); // 输出: null
