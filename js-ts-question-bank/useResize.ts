// @ts-ignore
import { ref, onMounted, onUnMounted } from "vue";

/**
 * vue3 监听页面大小改变
 */
export function useWindowSize() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  const update = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => {
    window.addEventListener("resize", update);
  });

  onUnMounted(() => {
    window.removeEventListener("resize", update);
  });

  return {
    width,
    height,
  };
}
