/**
 * 在 [0, 600] 之间随机取三个数，要求两两之间差大于 100
 * 不断随机取 3 个数，排序后检查是否满足 diff > 100，满足就返回，否则重试
 * @returns arr
 */
function randomThree() {
    while (true) {
        const a = Math.random() * 600
        const b = Math.random() * 600
        const c = Math.random() * 600
        const arr = [a, b, c].sort((x, y) => x - y)
        if (arr[1] - arr[0] > 100 && arr[2] - arr[1] > 100) {
            return arr
        }
    }
}

/*
思路：令三个有序数为 x < y < z，令
  x = A
  y = A + 100 + B
  z = A + 200 + B + C
其中 A,B,C >= 0 且满足 A + B + C <= 400（因为 z = A + 200 + B + C ≤ 600）。

先随机取 x 在 [0, 400]（保证后面还能放下 200）。
再随机取 y 在 [x + 100, 500]（保证 z 最少还能为 y+100 且 ≤600）。
最后随机取 z 在 [y + 100, 600]。
*/
function randomThree_constructive() {
  const x = Math.random() * 400;                     // [0,400]
  const y = x + 100 + Math.random() * (500 - (x + 100)); // [x+100, 500]
  const z = y + 100 + Math.random() * (600 - (y + 100)); // [y+100, 600]
  return [x, y, z];
}