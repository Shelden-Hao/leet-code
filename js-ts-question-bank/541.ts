function reverseStr(s: string, k: number): string {
    const arr = s.split('')
    for (let i = 0; i < arr.length; i += 2 * k) {
        // 计算出需要反转的距离区间 [i, i + k -1]
        let left = i
        // 判断是否存在长度不足够k的情况
        let right = Math.min(i + k -1, arr.length - 1)

        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
    return arr.join('')
};
