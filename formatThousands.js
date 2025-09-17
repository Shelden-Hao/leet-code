/**
 * 将数字或数字字符串格式化为千分位（保留小数部分原样）
 * @param num number | string
 */
function formatThousands(num) {
    // 判断边界：undefined null ''
    if (num === null || num === undefined) return ''
    const s = String(num).trim()
    if (s === '') return ''
    // 处理符号
    const sign = s[0] === '-' ? '-' : ''
    const abs = sign ? s.slice(1) : s
    // 拆分小数和整数部分
    const [intPartRaw, decPartRaw] = abs.split('.')
    const intPart = intPartRaw || '0'
    const decPart = decPartRaw !== undefined ? '.' + decPartRaw : ''
    // 保存结果和位数
    let result = '', count = 0
    for (let i = intPart.length - 1; i >= 0; i--) {
        result = intPart[i] + result
        count++
        if (count % 3 === 0 && i !== 0) {
            result = ',' + result
        }
    }
    return sign + result + decPart
}

console.log(formatThousands(56152.63))
