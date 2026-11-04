/**
 * 秒数转 HH:MM:SS
 * 输入非负整数，输出两位格式时间
 *
 * @example
 * 5 → "00:00:05"
 * 60 → "00:01:00"
 * HH范围00-99，MM和SS范围00-59
 */
function formatTime(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60

  const fmt = (n: number) => (n < 10 ? '0' + n : '' + n)

  return fmt(h) + ':' + fmt(m) + ':' + fmt(s)
}
