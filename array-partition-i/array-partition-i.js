/**
 * @param {number[]} nums
 * @return {number}
 */

// 2n integers means even number of integers
// To solve this problem, we need to find a way to group the integers into pairs such that the sum of the minimum of each pair is maximized.

// One way to do this is to sort the array in ascending order and then group the elements in pairs by taking the first two elements as a pair, the next two elements as a pair, and so on. Since the array is sorted, the minimum element of each pair would be the first element of the pair. So, the sum of the minimum of each pair would be the sum of all the even-indexed elements of the sorted array.

var arrayPairSum = function(nums) {
    // sort
    nums.sort((a, b) => a - b);
    // init sum
    let sum = 0;
    // iterate evens (1st index in every pair)
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    return sum;
};