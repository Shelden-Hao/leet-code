import _ from 'lodash'
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 先对每个字符串进行排序 作为分组规则（函数返回值为 key） 值为满足规则的数组元素组成的数组 然后进行分组
    /*
     * 例如：_.groupBy([6.1, 4.2, 6.3], Math.floor); // => { '4': [4.2], '6': [6.1, 6.3] }
     */
    const g = _.groupBy(strs, str => str.split('').sort().join(''))
    console.log(g)
    // 返回 value 组成的数组
    return Object.values(g)
};
// 测试代码
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))