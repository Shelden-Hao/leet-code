/**
 * 手写 Array.prototype.flat
 * @return {*[]}
 */
Array.prototype.myFlat = function () {
    const res = []

    function dfs(arr) {
        for (let item of arr) {
            if (Array.isArray(item)) {
                dfs(item)
            } else {
                res.push(item)
            }
        }
    }

    dfs(this)
    return res
}
console.log([1, [2, [3, 2]], 5, [1, 4]].myFlat());
