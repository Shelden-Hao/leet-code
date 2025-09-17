/**
 * 实现一个带 TTL（Time To Live）过期的 Cache
 */
class TTLCache {
    constructor() {
        this.cache = new Map()
    }

    /**
     * 设置缓存
     * @param {string} key - 键
     * @param {*} value - 值
     * @param {number} ttl - 过期时间（毫秒）
     */
    set(key, value, ttl) {
        // Date.now() 表示自UNIX 纪元开始（1970 年1 月1 日00:00:00 (UTC)）到当前时间的毫秒数
        const expireAt = Date.now() + ttl
        this.cache.set(key, {value, expireAt})
    }

    /**
     * 获取缓存
     * @param {string} key - 键
     * @returns {*} 值或 null
     */
    get(key) {
        const data = this.cache.get(key)
        if (!data) return null
        if (Date.now() > data.expireAt) {
            this.delete(key)
            return null
        }
        return data.value
    }

    /**
     * 删除缓存
     * @param {string} key - 键
     */
    delete(key) {
        this.cache.delete(key)
    }

    /**
     * 判断是否存在且未过期
     */
    has(key) {
        return this.get(key) !== null
    }
}

// 使用示例
// const cache = new TTLCache();
// cache.set("foo", "bar", 2000); // 存2秒
// console.log(cache.get("foo")); // "bar"
// setTimeout(() => {
//     console.log(cache.get("foo")); // null (已过期)
// }, 3000);
