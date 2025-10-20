/**
 * 请求超时机制
 * 网络请求在指定时间未响应，抛出异常。
 * @param {string} url 
 * @param {any} options 
 * @param {number} timeout 超时时间
 * @returns 网络请求和超时请求，哪个先完成返回哪个
 */
function fetchWithTimeout(url, options = {}, timeout = 10000) {
    const controller = new AbortController()
    const signal = controller.signal
    const fetchPromise = fetch(url, { ...options, signal })
    const timeoutPromise = new Promise((_, reject) => {
        const timer = setTimeout(() => {
            controller.abort() // 终止请求
            reject(new Error('Request timeout'))
        }, timeout);
        // 请求结束后关闭定时器
        fetchPromise.finally(() => clearTimeout(timer))
    })
    return Promise.race([fetchPromise, timeoutPromise])
}

/**
 * axios旧版，不支持AbortController
 */
function axiosWithTimeout(config, timeout = 10000) {
  const source = axios.CancelToken.source();
  const timeoutPromise = new Promise((_, reject) => {
    const timer = setTimeout(() => {
      source.cancel(`请求超时（${timeout}ms）`);
      reject(new Error(`请求超时（${timeout}ms）`));
    }, timeout);
    axiosPromise.finally(() => clearTimeout(timer))
  });
  const axiosPromise = axios({ ...config, cancelToken: source.token });
  return Promise.race([axiosPromise, timeoutPromise]);
}

/**
 * axios新版，支持AbortController
 */
function axiosWithTimeout(config, timeout = 10000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    return axios({
      ...config,
      signal: controller.signal
    })
      .finally(() => clearTimeout(id))
      .catch(err => {
        if (axios.isCancel(err)) throw new Error('请求被中止');
        else if (err.name === 'CanceledError') throw new Error('请求超时');
        throw err;
      });
  }
  
/**
 * 通过模板
 */
function withTimeout(promise, timeout = 5000, msg = '请求超时') {
    let timer;
    return Promise.race([
      promise,
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error(msg)), timeout);
      })
    ]).finally(() => clearTimeout(timer));
  }
  
export {}