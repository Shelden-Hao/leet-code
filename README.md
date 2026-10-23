# 前端手撕代码汇总

> 目标是成为目前最全、最优质的前端手撕代码题整理题库。

主要内容包含前端代码手写题、力扣经典题、数据结构和算法经典题、校招笔试题等等。

## 仓库结构

```
leet-code/
├── frontend-question-bank/       # 前端题库：手写题、力扣、校招笔试
│   ├── 1.js / 1.ts               # 按力扣题号命名，js 与 ts 双版本
│   ├── 封装延迟Promise.ts        # 手写题按功能命名
│   └── 校招笔试题/               # 按公司 / 场次归档
├── java-backend-question-bank/
│   └── leet-code/                # 用 Java 写的同一批题，便于对比两种语言写法
├── package.json
└── tsconfig.json
```

## 约定

- **力扣题**：文件名直接用题号，如 `104.ts`、`1143.java`，方便和题解对照；同一题同时保留 JS 与 TS 版本。
- **手写题**：文件名即题目，如 `数组去重.js`、`封装延迟Promise.js`。
- **笔试真题**：放进 `frontend-question-bank/校招笔试题/` 下按场次归档。
- **题解说明**：需要解释思路的题，额外补一份同名 `.md`。

## 使用

题目文件都是可直接运行的独立脚本，挑一个用 Node 跑起来即可：

```bash
node frontend-question-bank/数组去重.js
```

TypeScript 文件用 `ts-node` 或 VS Code 直接运行均可，`tsconfig.json` 已配好。
