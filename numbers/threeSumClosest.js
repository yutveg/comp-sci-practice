var threeSumClosest = function (nums, target) {
  let bestDistance = Number.POSITIVE_INFINITY;
  let bestSum = 0;

  nums.sort((a, b) => a - b);

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
      }
      // if we are larger than target, try to shrink sum
      if (nums[i] + nums[j] + nums[k] > target) {
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

console.log(threeSumClosest([-100, -98, -2, -1], -101));
