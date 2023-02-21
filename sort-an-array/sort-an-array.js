/**
 * @param {number[]} nums
 * @return {number[]}
 */
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