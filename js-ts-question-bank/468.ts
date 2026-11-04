/**
 * 468. 验证IP地址
 * https://leetcode.cn/problems/validate-ip-address/description/
 * @param queryIP 需要验证的ip字符串
 * @returns 是哪种ip
 */
function validIPAddress(queryIP: string): string {
    function isIPv4(queryIP: string): boolean {
        const segments = queryIP.split('.')
        if (segments.length !== 4) return false
        for (let i = 0; i < segments.length; i++) {
            const segment = segments[i]
            // 检查空串
            if (segment.length === 0) return false
            // 必须全部是数字
            if (!/^[0-9]+$/.test(segment)) return false
            // 前导零
            if (segment.length > 1 && segment[0] === '0') return false
            // 检查范围
            const num = parseInt(segment)
            if (num < 0 || num > 255) return false
        }
        return true
    }
    function isIPv6(queryIP: string): boolean {
        const segments = queryIP.split(':')
        if (segments.length !== 8) return false
        for (let i = 0; i < segments.length; i++ ) {
            const segment = segments[i]
            // 空串
            if (segment.length === 0) return false
            // 每个片段的长度范围
            if (segment.length < 1 || segment.length > 4) return false
            // 每个字符是否为十六进制
            for (let j = 0; j < segment.length; j++) {
                const char = segment[j]
                if (!/[0-9a-fA-F]/.test(char)) return false
            }
        }
        return true
    }
    // 分别尝试ipv4和ipv6
    if (isIPv4(queryIP)) return 'IPv4'
    if (isIPv6(queryIP)) return 'IPv6'
    return 'Neither'
};
