# 360校招(2025-09-20)笔试算法第一题 - 字符串操作(Web)

## 题目描述

给定长度为n的字符串s和长度为m的字符串t。对于长度为n的字符串，它的子串[l,r]（1<=l<=r<=n），是指从第l个字符开始到第r个字符结束这一段所构成的字符串。
请判断是否能够通过进行至多1次以下操作使得字符串s和字符串t完全相同：在字符串s中选择一个子串[l,r]（1<=l<=r<=n），将该子串从s串中除，同时将该子串添加到t串末尾。

### 输入描述

输入包含多组测试数据。
输入第一行包含一个整数T(1≤T≤10)，表示数据组数。
之后每三行描述一组测试数据：
第一行包含两个正整数m和n(1≤m≤n≤1000)分别表示字符串s和t的长度，
第二行包含一个长度为n的字符串，表示字符串s, 保证仅包含小写英文字母，
第三行包含个长度为m的字符串，表示字符串t，保证仅包含小写英文字母。

## 输出描述

对于每组测试数据输出一行，如果能够通过至多1次操作使得字符串s和t完全相同！则输出YES, 否则输出NO。

## 样例输入
```
2
4 2
acdc
4 2
accd
ad
```

## 样例输出
```
YES
NO
```

## 参考答案

> 仅供参考，非官方答案。

```js
function solve(inputStr) {
    let lines = inputStr.trim().split('\n');
    let T = parseInt(lines[0]);
    let index = 1;
    let results = [];

    for (let i = 0; i < T; i++) {
        let [n, m] = lines[index++].split(' ').map(Number);
        let s = lines[index++];
        let t = lines[index++];

        if (s === t) {
            results.push("YES");
            continue;
        }

        let diff = n - m;
        if (diff % 2 !== 0) {
            results.push("NO");
            continue;
        }

        let lenB = diff / 2;
        let found = false;

        for (let l = 0; l <= n - lenB; l++) {
            let r = l + lenB - 1;
            let s_after = s.substring(0, l) + s.substring(r + 1);
            let t_after = t + s.substring(l, r + 1);

            if (s_after === t_after) {
                found = true;
                break;
            }
        }

        results.push(found ? "YES" : "NO");
    }

    return results.join('\n');
}

// 示例输入（字符串形式）
const input = `2
4 2
acdc
ad
4 2
accd
ad`;

console.log(solve(input));
// 输出：
// YES
// NO
```
