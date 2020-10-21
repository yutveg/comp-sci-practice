var threeSumClosest = function (nums, target) {
  let bestDistance = Number.POSITIVE_INFINITY;
  let bestSum = 0;

  nums.sort((a, b) => a - b);

  // if our sorted arrays first element is target or greater
  // our closest sum will be first three elements in array
  if (nums[0] >= target) {
    bestSum = nums[0] + nums[1] + nums[2];
    return bestSum;
  }

  for (let i = 0; i < nums.length - 2; i++) {
    // if we are looking at a previously examined number
    // we can skip as we already have its possible combinations
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1, k = nums.length - 1; j < k; ) {
      // How far are we from the target?
      let currentDistance = Math.abs(target - (nums[i] + nums[j] + nums[k]));

      // Are we closer to the target than our current best?
      if (currentDistance < bestDistance) {
        bestSum = nums[i] + nums[j] + nums[k];
        bestDistance = currentDistance;
        // shrink boundary until we find new values to combine
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (k > j && nums[k] === nums[k + 1]) {
          k--;
        }
      }
      // if we are larger than target, try to shrink sum
      else if (nums[i] + nums[j] + nums[k] > target) {
        k--;
      }

      // if we are smaller than target, try to increase sum
      else {
        j++;
      }
    }
  }

  return bestSum;
};
