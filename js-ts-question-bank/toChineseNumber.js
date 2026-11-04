/**
 * 数字转中文
 * @param {number} num 万亿以下的正整数
 */
function toChineseNumber(num) {
  // 正则解释：
  // (?= ...) 正向预查，用于匹配位置，不消耗字符
  // (?=(\d{4})+$) 匹配4n个数字位置，且位置后面跟着4n个数字，且4n个数字后面是结尾
  const parts = num
    .toString()
    .replace(/(?=(\d{4})+$)/g, ",")
    .split(",")
    .filter(Boolean); // 过滤掉空字符串
  const map = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  const units = ["", "十", "百", "千"];

  function _handleZero(str) {
    // 多个零只保留一个，如果最后是零则去掉
    return str.replace(/零+/g, "零").replace(/零$/, "");
  }

  // 将小于等于四位的数字转为中文读法
  function _transform(num) {
    let result = "";
    for (let i = 0; i < num.length; i++) {
      // 字符
      let char = map[num[i]];
      // 单位
      let unit = units[num.length - i - 1];
      // 有零则不读取单位
      if (char === "零") {
        unit = "";
      }

      result += char + unit;
    }
    result = _handleZero(result);
    return result;
  }
  let result = "";
  const bigUnits = ["", "万", "亿"];
  for (let i = 0; i < parts.length; i++) {
    let char = _transform(parts[i]);
    let unit = bigUnits[parts.length - i - 1];
    // 如果当前数字为空，则补零
    if (char === "") {
      char = "零";
      unit = "";
    }
    result += char + unit;
  }
  result = _handleZero(result);
  return result;
}
console.log(toChineseNumber(12300000));
