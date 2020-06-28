var arrayPairSum = function(nums) {
  let total = 0;
  let sortedArray = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i += 2) {
    total = total + Math.min(sortedArray[i], sortedArray[i + 1]);
  }
  return total;
};

arrayPairSum([1, 4, 3, 2]);
