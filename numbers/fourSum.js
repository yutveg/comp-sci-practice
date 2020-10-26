var fourSum = function (nums, target) {
  let result = [];

  // sort the given nums array to make it easier to find unique values later
  nums.sort((a, b) => a - b);

  // have an initial loop that takes i and j from edges inward
  for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
    while (i < j && nums[i] === nums[i - 1]) {
      i++;
    }

    while (i < j && nums[j] === nums[j + 1]) {
      j--;
    }

    // have a second loop that takes k forward by one
    for (let k = i + 1; k < j - 2; k++) {
      while (k > 2 && nums[k] === nums[k - 1]) {
        k++;
      }

      // a third loop to create our "active surveyor" variable
      for (let l = k + 1; l < j; l++) {
        let currentSum = nums[i] + nums[j] + nums[k] + nums[l];

        if (currentSum === target) {
          result.push([nums[i], nums[k], nums[l], nums[j]]);
        }
      }
    }
  }
  return result;
};
