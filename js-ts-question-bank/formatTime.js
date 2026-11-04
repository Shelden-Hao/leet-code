/**
 * 将时间戳格式化为人性化显示的时间
 * @param {number} timestamp 传入的时间戳
 * @returns 格式化显示的时间（人性化显示的时间）
 */
function formatTime(timestamp) {
    const now = Date.now()
    const diff = Math.floor((now - timestamp) / 1000) // 差值，单位秒

    if (diff < 60) {
        return '一分钟以内'
    } else if (diff < 3600) {
        const minutes = Math.floor(diff / 60)
        return `${minutes} 分钟前`
    } else if (diff < 86400) {
        const hours = Math.floor(diff / 3600)
        return `${hours} 小时前`
    } else {
        const days = Math.floor(diff / 86400)
        return `${days} 天前`
    }
}

// console.log(formatTime(Date.now() - 30 * 1000));      // 一分钟以内
// console.log(formatTime(Date.now() - 5 * 60 * 1000));  // 5 分钟前
// console.log(formatTime(Date.now() - 2 * 3600 * 1000)); // 2 小时前
// console.log(formatTime(Date.now() - 3 * 86400 * 1000)); // 3 天前
