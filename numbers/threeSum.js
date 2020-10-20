// fast solution

var threeSum = function (nums) {
  var rtn = [];
  if (nums.length < 3) {
    return rtn;
  }
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < nums.length - 2; i++) {
    // once sorted if no negatives exist then no possible way to sum to zero
    if (nums[i] > 0) {
      return rtn;
    }
    // if the number behind is same as current we would've captured its pair already so skip
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (var j = i + 1, k = nums.length - 1; j < k; ) {
      // we find a unique pair, so narrow search window
      if (nums[i] + nums[j] + nums[k] === 0) {
        rtn.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        // find our new unique values for j and k
        while (j < k && nums[j] == nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] == nums[k + 1]) {
          k--;
        }
      }
      // if our sum is too big, shrink right side of window
      else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      }
      // if our sum is too small, shrink left side of window
      else {
        j++;
      }
    }
  }
  return rtn;
};
