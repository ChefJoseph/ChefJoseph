/**
 * @param {number[]} nums
 * @return {number[]}
 */

// The heapSort function uses two helper functions: heapify and swap.

// The heapify function takes an array, an index, and a heap size. It compares the value at the current index with its left and right children (if they exist) to find the largest value. If the largest value is not at the current index, it swaps the values and recursively calls heapify on the new index.

// The swap function simply swaps two elements in the array.

// The heapSort function first heapifies the input array to satisfy the max-heap property. Then, it repeatedly extracts the maximum element from the heap (which is always at the root) and places it at the end of the array. After all elements have been extracted, the array is sorted in ascending order.

// The time complexity of heap sort is O(n log n), which is achieved by the heapify operation that takes O(log n) time for each node in the heap. The space complexity is O(1), as the sort is performed in-place.
var sortArray = function(nums) {
      // Heapify the array to satisfy the max-heap property
  for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
    heapify(nums, i, nums.length);
  }

  // Extract elements from the heap and place them at the end of the array
  for (let i = nums.length - 1; i > 0; i--) {
    swap(nums, 0, i);
    heapify(nums, 0, i);
  }

  return nums;
}

function heapify(nums, index, heapSize) {
  let largest = index;
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  if (left < heapSize && nums[left] > nums[largest]) {
    largest = left;
  }

  if (right < heapSize && nums[right] > nums[largest]) {
    largest = right;
  }

  if (largest !== index) {
    swap(nums, index, largest);
    heapify(nums, largest, heapSize);
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};