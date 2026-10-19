const crypto = require("crypto");

function createSign(params, secret) {
    const str = Object.keys(params)
        .sort()
        .map(key => `${key}=${params[key]}`)
        .join("&");

    return crypto
        .createHash("md5")
        .update(str + secret)
        .digest("hex");
}

/**
 * token 校验：参数排序拼接后 md5 比对
 * @param params 参数对象
 * @param sign 服务端签名
 * @param secret 密钥
 * @returns {boolean} 是否一致
 */
function verifySign(params, sign, secret) {
    const newSign = createSign(params, secret);

    return newSign === sign;
}

const params = {
    name: "Tom",
    timestamp: 1690000000,
    id: 123
};

const secret = "abc123";

const sign = createSign(params, secret);

console.log(sign);

console.log(
    verifySign(params, sign, secret)
); // true