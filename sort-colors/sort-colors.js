/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let min_index;
    for(let i=0; i<nums.length; i++){
        min_index = i;
        for(let j=i+1; j<nums.length; j++) {
            if(nums[j] < nums[min_index]) {
                min_index = j;
            }
        }
        let temp = nums[min_index];
        nums[min_index] = nums[i];
        nums[i] = temp;
    }
};