/**
 * 查找某对象在数组中的指定深度和路径
 * @param arr 数组
 * @param targetId 目标id
 * @return {Object} 结果
 */
function findPathAndDepth(arr, targetId) {
  const result = {
    path: [],
    depth: 0,
  };

  function dfs(arr, path) {
    for (const item of arr) {
      path.push(item.id);
      if (item.id === targetId) {
        result.path = [...path];
        result.depth = path.length;
        return;
      }
      if (item.children) {
        dfs(item.children, path);
      }
      path.pop();
    }
  }
  dfs(arr, []);
  return result;
}

// 示例 查找 id=4 的项在数组中的路径和深度
// const data = [
//   {
//     id: 1,
//     children: [
//       { id: 2 },
//       {
//         id: 3,
//         children: [{ id: 4 }],
//       },
//     ],
//   },
// ];
// console.log(findPathAndDepth(data, 4)); // { path: [ 1, 3, 4 ], depth: 3 }

/**
 * 查找纯多维数组中某项的索引路径
 * @param arr 数组
 * @param target 目标项
 * @return {Object} 结果
 */
function findIndexPath(arr, target) {
  const result = {
    path: [],
    depth: 0,
  };

  function dfs(arr, path) {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      path.push(i);
      if (item === target) {
        result.path = [...path];
        result.depth = path.length;
        return;
      }
      if (Array.isArray(item)) {
        dfs(item, path);
      }
      path.pop();
    }
  }
  dfs(arr, []);
  return result;
}

// const arr = [1, [2, [3, 4]], 5];
// console.log(findIndexPath(arr, 4)); // { path: [ 1, 1, 1 ], depth: 3 }
