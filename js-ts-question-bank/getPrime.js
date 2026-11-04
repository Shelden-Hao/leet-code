/**
 * 每次执行获取下一个质数（考察闭包）
 */
function getPrime() {
  let num = 1;

  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  return function () {
    while (true) {
      num++;
      if (isPrime(num)) return num;
    }
  };
}

// const nextPrime = getPrime();

// console.log(nextPrime()); // 2
// console.log(nextPrime()); // 3
// console.log(nextPrime()); // 5
