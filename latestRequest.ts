/**
 * 手写竞态请求，只消费最后一次
 * 多个请求并发发出，但只允许“最后一次请求”的结果生效，前面的请求即使晚回来，也不能覆盖最后一次结果。
 * 常见的场景是输入框前后输入多个搜索条件(自动触发搜索)，我们只要最后一次触发搜索的结果
 */

/**
 * 方案一：requestId
 */
type RequestFn<T> = (keyword: string) => Promise<T>;
function createLatestRequest<T>(
  request: RequestFn<T>,
  onSuccess: (data: T) => void
) {
  let requestId = 0;

  /**
   * 核心思路：
   * request A → id = 1
   * request B → id = 2
   * request C → id = 3
   * 返回顺序可能是： C → A → B ，但是：
   *
   * C 返回：
   * currentId = 3
   * requestId = 3
   * ✅ 消费
   *
   * A 返回：
   * currentId = 1
   * requestId = 3
   * ❌ 丢弃
   *
   * B 返回：
   * currentId = 2
   * requestId = 3
   * ❌ 丢弃
   */

  return async (keyword: string) => {
    const currentId = ++requestId;

    try {
      const data = await request(keyword);

      // 只有最后一次请求才能消费结果
      if (currentId !== requestId) { // 保证响应的ID和请求ID一致，数值都为最后一次请求ID
        return;
      }

      onSuccess(data);
    } catch (error) {
      // 同样只处理最后一次请求的错误
      if (currentId !== requestId) {
        return;
      }

      console.error(error);
    }
  };
}

const req = createLatestRequest(
  async (keyword: string) => {
    const res = await fetch(`/api/search?q=${keyword}`);
    return res.json();
  },
  (data) => {
    console.log("更新 UI:", data);
  }
);

req("a");
req("ab");
req("abc");

/**
 * 方案二：AbortController
 * 这里要注意 AbortController 主要解决的是主动取消前一个请求，降低无效请求的网络和资源开销；
 * 但取消并不能作为结果正确性的唯一保证，因为请求可能已经发送甚至服务端已经处理完成。
 */
let controller: AbortController | null = null;
async function search(keyword: string) {
  // 取消上一次请求
  controller?.abort();

  controller = new AbortController();

  try {
    const res = await fetch(
      `/api/search?q=${keyword}`,
      {
        signal: controller.signal
      }
    );

    const data = await res.json();

    console.log(data);
  } catch (error) {
    if ((error as DOMException).name === "AbortError") {
      return;
    }

    console.error(error);
  }
}
search("a");
search("ab");
search("abc");

export {}