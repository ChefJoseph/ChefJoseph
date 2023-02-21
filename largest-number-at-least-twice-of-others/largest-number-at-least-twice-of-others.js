/**
 * @param {number[]} nums
 * @return {number}
 */
// To solve this problem, we can first find the largest element in the array and its index. Then, we can iterate through the array and check if every other number is at most half the value of the largest element. If any number is larger than half the largest element, we can immediately return -1. If we make it through the entire loop, we have found the index of the largest element that satisfies the condition, and we can return it.
var dominantIndex = function(nums) {
    // find largest element
    let max = Math.max(...nums);
    // index of largest number
    let maxIndex = nums.indexOf(max);
    // iterate and check if not index of largest number, and number is at least half the value of largest num, if false, then keep iterating, if true, then return -1
    for (let i = 0; i < nums.length; i++) {
        if (i !== maxIndex && nums[i] * 2 > max) {
          return -1;
        }
      }
    //if max number is more than half of every number then return its index
    return maxIndex;
};