function longestCommonPrefix(strs: string[]): string {
    // 数组为空 直接返回空串
    if (strs.length === 0) return "";
    // 把第一个元素作为prefix，后续逐渐切割
    // 判断前缀是否为字符串的子集（indexOf）进行切割
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        const str = strs[i]
        while (str.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1)
        }
        if (prefix.length === 0) return prefix
    }
    return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])) // ""