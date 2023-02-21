/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // Sort array
      const ordered = [...heights];
      heights.sort((a, b) => a - b);
    // Compare to new ordered array to original array. If different then +1 to diff.
      let diff = 0;
      for (let i = 0; i < ordered.length; ++i) {
        ordered[i] !== heights[i] && ++diff;
      }
      return diff;
};