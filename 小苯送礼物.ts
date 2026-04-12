/**
 * 2024年春招-小红书-前端岗-第三批笔试

21. 题目描述：
小苯是“小红书app”的一名博主，这天他想要给自己的“铁粉”送一些礼物。

他有 n 名粉丝，编号从 1 到 n，但他只能选择其中 k 名送礼物，他决定选择其中对他支持力度最大的前 k 名粉丝。
（如果两名支持力度相同，则优先选择收藏数更多的，如果都一样，则优先选择编号更小的（因为这意味着他关注小苯的时间更早））

具体的：每名粉丝如果每给小苯点一次赞，则他对小苯就增加了 1 点支持力度，如果他每收藏小苯的一篇文章，则他对小苯增加 2 点支持力度。

现在小苯想知道，他应该选择哪 k 名粉丝送出礼物，请你帮帮他吧。
时间限制：C/C++ 1秒，其他语言2秒
空间限制：C/C++ 256M，其他语言512M

输入描述：
输入包含 n+1 行。
第一行两个正整数 n, k,分别表示对小苯有过支持的粉丝个数，以及小苯选择送礼的粉丝个数。
接下来 n 行，每行两个整数 x_i, y_i,表示第 i 位粉丝给小苯点过 x 次赞，收藏过 y 个小苯的文章。

输出描述：
输出包含一行 k 个正整数，表示小苯选择出送礼物的粉丝们的编号。（按照升序输出）

示例1
```
输入例子：
4 2
1 2
2 1
3 0
1 3
```
```
输出例子：
1 4
```
*/

const readline = require('readline');

interface Fan {
  x: number;
  y: number;
  id: number;
  score: number;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n: number, k: number;
let fans: Fan[] = [];
let index = 0;

// 通过注释暂时避免编辑器中的报错：参数“line”隐式具有“any”类型。ts(7006)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
rl.on('line', (line: any) => {
  if (index === 0) {
    const tokens = line.split(' ');
    n = parseInt(tokens[0]);
    k = parseInt(tokens[1]);
    index++;
  } else {
    const tokens = line.split(' ');
    const x = parseInt(tokens[0]);
    const y = parseInt(tokens[1]);
    fans.push({ x, y, id: fans.length + 1, score: x + 2 * y });
    if (fans.length === n) {
      // 排序：支持度降序，收藏数降序，编号升序
      fans.sort((a, b) => {
        if (a.score !== b.score) {
          return b.score - a.score;
        } else if (a.y !== b.y) {
          return b.y - a.y;
        } else {
          return a.id - b.id;
        }
      });
      // 取前k个粉丝的编号
      const result = fans.slice(0, k).map(fan => fan.id).sort((a, b) => a - b);
      console.log(result.join(' '));
      rl.close();
    }
  }
});

export { }