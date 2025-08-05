/**
 * 解析URL查询字符串，处理重复Key、编码解码及空参数等边界情况 - 使用 URLSearchParams
 * @param url
 */
// function parseQueryParams(url) {
//     const result = {};
//     // 如果输入的是完整 URL，记得用 .split('?')[1] 或使用 new URL(url).searchParams
//     const queryString = url.split('?')[1] || '';
//     const params = new URLSearchParams(queryString);
//
//     for (const [key, value] of params.entries()) {
//         if (result.hasOwnProperty(key)) {
//             // 如果已有该 key，转成数组或追加
//             if (Array.isArray(result[key])) {
//                 result[key].push(value);
//             } else {
//                 result[key] = [result[key], value];
//             }
//         } else {
//             result[key] = value;
//         }
//     }
//
//     return result;
// }
// parseQueryParams("https://example.com?name=张三&name=李四&age=20")
// // { name: ["张三", "李四"], age: "20" }
//
// parseQueryParams("https://example.com?key1&key2=value2")
// // { key1: "", key2: "value2" }
//
// parseQueryParams("https://example.com")
// // {}
//
// // 如果只需要读取某个key，可以：
// const url = "https://example.com?name=张三&name=李四&age=20";
// const params = new URLSearchParams(url.split('?')[1]);
//
// params.get('name');      // "张三"
// params.getAll('name');   // ["张三", "李四"]
// params.has('age');       // true

/**
 * 解析URL查询字符串，处理重复Key、编码解码及空参数等边界情况 - 只使用 URL
 * @param url
 */
function parseQueryParams(url) {
    const result = {};

    // 提取 query 部分
    const queryStart = url.indexOf('?');
    if (queryStart === -1 || queryStart === url.length - 1) {
        return result; // 无参数或仅有问号
    }

    const queryString = url.slice(queryStart + 1);
    const pairs = queryString.split('&');

    for (const pair of pairs) {
        if (!pair) continue; // 跳过空项（如连续两个&&）

        const [rawKey, rawValue = ''] = pair.split('=');
        const key = decodeURIComponent(rawKey);
        const value = decodeURIComponent(rawValue);

        // 处理重复 key 的情况
        if (result.hasOwnProperty(key)) {
            if (Array.isArray(result[key])) {
                result[key].push(value);
            } else {
                result[key] = [result[key], value];
            }
        } else {
            result[key] = value;
        }
    }

    return result;
}

console.log(parseQueryParams("https://example.com"));
// {}

console.log(parseQueryParams("https://example.com?"));
// {}

console.log(parseQueryParams("https://example.com?name=John&age=30"));
// { name: "John", age: "30" }

console.log(parseQueryParams("https://example.com?name=John&name=Jane"));
// { name: ["John", "Jane"] }

console.log(parseQueryParams("https://example.com?name=%E5%BC%A0%E4%B8%89"));
// { name: "张三" }

console.log(parseQueryParams("https://example.com?key1=&key2=value2"));
// { key1: "", key2: "value2" }

console.log(parseQueryParams("https://example.com?key1&key2=value2"));
// { key1: "", key2: "value2" }

console.log(parseQueryParams("https://example.com?arr=1&arr=2&arr=3"));
// { arr: ["1", "2", "3"] }
