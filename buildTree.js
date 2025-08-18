/**
 * 将目录路径字符串转为目录对象结构
 * 应用场景：Umi.js 中约定大于配置 自动根据目录结构生成路由
 */

// 比如使用 vite 获取模块
// 结果是 {'./bar/a/n.js': Module, ...} 包含路径和模块默认导出的键值对对象
const modules = import.meta.glob(['./bar/**/*.js', './foo/**/*.js'], {
    eager: true, // 直接拿到导入结果（而非动态import 导入）
    import: 'default' // 只要默认导出，暂时不考虑具名导出
})

/**
 * 将模块路径映射转为对象结构
 * @param modules 包含路径和模块映射的对象
 */
function catalogToObject(modules) {
    // 结果数组
    const result = {}

    for (let path in modules) {
        const moduleDefault = modules[path]
        // /[^\/\.]+/g => [^\/\.]：
        // 匹配不是 / 和 . 的任意字符
        // +：匹配前面的一个或多个
        // g：全局匹配
        // 👉 也就是说，它会把路径里 被 / 或 . 分隔的每一段 提取出来。=> ['bar', 'a', 'n', 'js']
        const matches = path.match(/[^\/\.]+/g).slice(0, -1)
        let current = result
        for (let i = 0; i < matches.length; i++) {
            const key = matches[i]
            current[key] = current[key] || {}
            if (i === matches.length - 1) {
                // 最后一项是模块的默认导出
                current[key] = moduleDefault
            }
            current = current[key]
        }
    }
    return result
}

/**
 * 将一个路径数组转为对象目录树（2025春招字节一面）
 * @param paths 路径字符串
 * @description 将一个目录字符串转化为一个树状的对象结构。
 * eg："a/b/c.js" => { key: "a", children: [ { key: "b", children: [ key: "c.js", children: [] ] } ]}
 */
function buildTree(paths) {
    const root = [];

    for (const path of paths) {
        const parts = path.split("/"); // 拆成数组
        let currentLevel = root;

        for (const part of parts) {
            // 在当前层查找是否已有同名节点
            let existingNode = currentLevel.find(node => node.key === part);

            if (!existingNode) {
                existingNode = { key: part, children: [] };
                currentLevel.push(existingNode);
            }

            currentLevel = existingNode.children;
        }
    }

    return root;
}

// 测试
const paths = [
    "a/b/c.js",
    "a/b/d.js",
    "a/e/f.js",
    "x/y/z.js"
];

console.log(JSON.stringify(buildTree(paths), null, 2));
