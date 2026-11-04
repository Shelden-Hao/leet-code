/**
 * [LCR 170. 交易逆序对的总数](https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/)
 */
class Solution {
    int count;

    public int reversePairs(int[] record) {
        count = 0;
        mergeSort(record, 0, record.length - 1);
        return count;
    }

    private void mergeSort(int[] a, int left, int right) {
        if (left >= right) return;
        int mid = left + (right - left) / 2;
        mergeSort(a, left, mid);
        mergeSort(a, mid + 1, right);
        merge(a, left, mid, right);
    }

    private void merge(int[] a, int left, int mid, int right) {
        // 归并时统计：右半段的数比左半段小，则与左半段剩余所有元素都构成逆序对
        int[] t = new int[right - left + 1];
        int k = 0;
        int i = left;
        int j = mid + 1;
        while (i <= mid && j <= right) {
            if (a[i] <= a[j]) {
                t[k++] = a[i++];
            } else {
                count += mid - i + 1;
                t[k++] = a[j++];
            }
        }
        while (i <= mid) t[k++] = a[i++];
        while (j <= right) t[k++] = a[j++];
        for (k = 0; k < t.length; k++) a[left + k] = t[k];
    }
}
