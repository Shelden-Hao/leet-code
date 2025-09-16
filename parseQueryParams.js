/**
 * 解析URL查询字符串，处理重复Key、编码解码及空参数等边界情况 - 使用 URLSearchParams
 * @param url
 */
function parseQueryParams(url) {
    const result = {};
    // 如果输入的是完整 URL，记得用 .split('?')[1] 或使用 new URL(url).searchParams
    const queryString = url.split('?')[1] || '';
    // URLSearchParams 返回的是一个 URLSearchParams 实例对象
    // URLSearchParams { 'name' => '张三', 'name' => '李四', 'age' => '20' }
    const params = new URLSearchParams(queryString);

    // params.entries() 返回一个 URLSearchParams 的迭代器对象:
    // URLSearchParams Iterator： { [ 'name', '张三' ], [ 'name', '李四' ], [ 'age', '20' ] }
    for (const [key, value] of params.entries()) {
        // 判断 result 里是否已经有这个 key
        if (result.hasOwnProperty(key)) {
            if (Array.isArray(result[key])) {
                // 如果之前保存的就是一个数组（说明这个 key 已经出现过多次）
                result[key].push(value);
            } else {
                // 如果之前保存的不是数组（说明是第一次重复出现这个 key），那么就把之前的值和这次的新值一起放进数组里
                result[key] = [result[key], value];
            }
        } else {
            // 如果这个 key 第一次出现，直接保存为普通值
            result[key] = value;
        }
    }

    return result;
}


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
// function parseQueryParams(url) {
//     const result = {};
//
//     // 提取 query 部分
//     const queryStart = url.indexOf('?');
//     if (queryStart === -1 || queryStart === url.length - 1) {
//         return result; // 无参数或仅有问号
//     }
//
//     const queryString = url.slice(queryStart + 1);
//     const pairs = queryString.split('&');
//
//     for (const pair of pairs) {
//         if (!pair) continue; // 跳过空项（如连续两个&&）
//
//         const [rawKey, rawValue = ''] = pair.split('=');
//         const key = decodeURIComponent(rawKey);
//         const value = decodeURIComponent(rawValue);
//
//         // 处理重复 key 的情况
//         if (result.hasOwnProperty(key)) {
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

// console.log(parseQueryParams("https://example.com"));
// // {}
//
// console.log(parseQueryParams("https://example.com?"));
// // {}
//
// console.log(parseQueryParams("https://example.com?name=John&age=30"));
// // { name: "John", age: "30" }
//
// console.log(parseQueryParams("https://example.com?name=John&name=Jane"));
// // { name: ["John", "Jane"] }
//
// console.log(parseQueryParams("https://example.com?name=%E5%BC%A0%E4%B8%89"));
// // { name: "张三" }
//
// console.log(parseQueryParams("https://example.com?key1=&key2=value2"));
// // { key1: "", key2: "value2" }
//
// console.log(parseQueryParams("https://example.com?key1&key2=value2"));
// // { key1: "", key2: "value2" }
//
// console.log(parseQueryParams("https://example.com?arr=1&arr=2&arr=3"));
// // { arr: ["1", "2", "3"] }

/**
 * 解析 URL
 */
function parseURL(url) {
    const u = new URL(url)
    const query = {}
    for (let [key, value] of u.searchParams.entries()) {
        query[key] = value
    }
    return {
        protocol: u.protocol,   // 协议，例如 "https:"
        hostname: u.hostname,   // 主机名，例如 "example.com"
        port: u.port,           // 端口，例如 "8080"
        host: u.host,           // 主机 + 端口，例如 "example.com:8080"
        pathname: u.pathname,   // 路径，例如 "/path/to/file"
        search: u.search,       // 查询字符串，例如 "?a=1&b=2"
        query,                  // 解析后的查询参数对象
        hash: u.hash            // 哈希，例如 "#section1"
    }
}

// 使用示例
// console.log(parseURL("https://example.com:8080/path/to/file?a=1&b=2#section1"));
