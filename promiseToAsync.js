/**
 * 把 Promise 链式 .then 的“回调地狱”写法，优化成更清晰的 async/await。
 */

// ===“回调地狱”写法===
function getUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id: 1, name: "Tom" }), 500)
    })
}

function getPostsByUser(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve(["post1", "post2"]), 500)
    })
}

function getCommentsByPost(post) {
    return new Promise(resolve => {
        setTimeout(() => resolve([post + "-comment1", post + "-comment2"]), 500)
    })
}

// ❌ 当前写法：Promise.then 回调嵌套
getUser().then(user => {
    return getPostsByUser(user.id).then(posts => {
        return getCommentsByPost(posts[0]).then(comments => {
            console.log("最终结果：", comments)
        })
    })
})

// ===async/await写法===
async function PromiseToAsync() {
    try {
        const userInfo = await getUser();
        const postsInfo = await getPostsByUser(userInfo.id);
        const commentsInfo = await getCommentsByPost(postsInfo[0]);
        console.log("最终结果：", commentsInfo);
    } catch (error) {
        console.log('error：', error)
    }
}
PromiseToAsync()
