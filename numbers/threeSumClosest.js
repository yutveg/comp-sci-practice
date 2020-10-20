var threeSumClosest = function (nums, target) {
  let bestDistance = Number.POSITIVE_INFINITY;
  let bestSum = 0;

  nums.sort((a, b) => a - b);

  if (nums[0] >= target) {
    bestSum = nums[0] + nums[1] + nums[2];
    return bestSum;
  }

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1, k = nums.length - 1; j < k; ) {
      let currentDistance = Math.abs(target - (nums[i] + nums[j] + nums[k]));

      if (currentDistance < bestDistance) {
        bestSum = nums[i] + nums[j] + nums[k];
        bestDistance = currentDistance;
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (k > j && nums[k] === nums[k + 1]) {
          k--;
        }
      } else if (nums[i] + nums[j] + nums[k] > target) {
        k--;
      } else {
        j++;
      }
    }
  }

  return bestSum;
};
