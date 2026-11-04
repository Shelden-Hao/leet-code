# 360校招(2025-09-20)笔试算法第二题 - 磁力站(Web)

## 题目描述

老张非常喜欢玩一款游戏，在这个游戏中，有一个无穷大的坐标网格地图，玩家需要制造若干燃力站来进行充能。
单个磁力站可以带来1点能量，集群的磁力站的效益更高。具体来说，在一个拥有a座磁力站的“八连通”块可以提供a²的能量
【这里的“八联通”指如果两座磁力站的横纵坐标之差的绝对值均不大于1，即一座处于(x,y)处的磁力站和(x+1,y)(x+1,y+1)(x,y+1)(x-1,y+1)(x-1,y)(x-1,y-1)(x,y-1)(x+1.y-1)
这八处的磁力站(如果存在)是在一个联通块内】
现在老张新开了一局游戏，他新建了很多磁力站，但是他弄不清楚这些磁力站能够给他提供多少能量了。他想知道的是在他每一次建立磁力站后这些磁力站能够给他带来多少能量。

### 输入描述

输入的第一行包含一个数n(1<=n<=100000)，表示老张建造了n座磁力站。
接下来的n行每行包含两个整数x和y， 表示老张在(x,y)处建造了一个磁力站。
输入的所有的数字均为整数且绝对值不超过10^9，且保证不会有两座磁力站建造在同一坐标处。

## 输出描述

输出n行，表示每一次建立磁力站后所提供的能量值之和。(请注意答案可能会超出32位有符号整型数所能表示的范围)

## 样例输入
```
4
0 0
2 3
1 1
2 2
```

## 样例输出
```
1
2
5
16
```

## 参考答案

> 仅供参考，非官方答案。

```js
function solve(input) {
    let lines = input.trim().split('\n');
    let n = parseInt(lines[0]);
    let points = [];
    for (let i = 1; i <= n; i++) {
        let [x, y] = lines[i].split(' ').map(Number);
        points.push([x, y]);
    }

    let parent = {};
    let size = {};
    let occupied = new Set();
    let totalEnergy = 0;
    let result = [];

    function find(key) {
        if (!parent[key]) {
            parent[key] = key;
            size[key] = 1;
            return key;
        }
        if (parent[key] !== key) {
            parent[key] = find(parent[key]);
        }
        return parent[key];
    }

    function union(a, b) {
        let rootA = find(a);
        let rootB = find(b);
        if (rootA === rootB) return false;

        if (size[rootA] < size[rootB]) {
            [rootA, rootB] = [rootB, rootA];
        }
        parent[rootB] = rootA;
        size[rootA] += size[rootB];
        return true;
    }

    const directions = [
        [-1,-1], [-1,0], [-1,1],
        [0,-1],          [0,1],
        [1,-1],  [1,0],  [1,1]
    ];

    for (let [x, y] of points) {
        const key = `${x},${y}`;

        // 初始化新点
        if (!parent[key]) {
            parent[key] = key;
            size[key] = 1;
        }
        occupied.add(key);

        // 1. 收集所有相邻联通块
        const adjacentRoots = new Set();
        for (const [dx, dy] of directions) {
            const neighborKey = `${x + dx},${y + dy}`;
            if (occupied.has(neighborKey)) {
                adjacentRoots.add(find(neighborKey));
            }
        }

        // 2. 计算合并前的总能量
        let oldEnergy = 0;
        for (const root of adjacentRoots) {
            oldEnergy += size[root] * size[root];
        }

        // 3. 合并所有相邻联通块
        for (const root of adjacentRoots) {
            union(key, root);
        }

        // 4. 计算新能量
        const newRoot = find(key);
        const newSize = size[newRoot];
        const newEnergy = newSize * newSize;

        // 5. 更新总能量
        totalEnergy += newEnergy - oldEnergy;
        result.push(totalEnergy);
    }

    return result.join('\n');
}

// 测试
const input = `4
0 0
2 3
1 1
2 2`;
console.log(solve(input));
/*
正确输出：
1
2
5
16
*/
```
