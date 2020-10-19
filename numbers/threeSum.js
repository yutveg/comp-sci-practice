var threeSum = function (nums) {
  // Utilize a hashtable as a quick look up
  // with number as key and its index as the value
  let lookup = {};
  for (let i = 0; i < nums.length; i++) {
    lookup[nums[i]] = i;
  }

  let solutionArray = [];

  // Two runners go through array
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === nums.length - 1 && j === nums.length - 1) {
        break;
      } else if (i === j) {
        continue;
      }

      let requiredValue = (nums[i] + nums[j]) * -1;

      // We found a three sum
      if (
        lookup[requiredValue] &&
        lookup[requiredValue] !== i &&
        lookup[requiredValue] !== j
      ) {
        let sortedThreeSum = [nums[i], nums[j], requiredValue].sort(
          (a, b) => a - b
        );

        // We found a unique three sum
        if (!isArrayInMatrix(solutionArray, sortedThreeSum)) {
          solutionArray.push(sortedThreeSum);
        }
      }
    }
  }

  return solutionArray;
};

function isArrayInMatrix(arr, query) {
  let queryString = JSON.stringify(query);

  let contains = arr.some((item) => {
    return JSON.stringify(item) === queryString;
  });

  return contains;
}

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
    if (nums[i] > 0) {
      return rtn;
    }
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (var j = i + 1, k = nums.length - 1; j < k; ) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        rtn.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] == nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] == nums[k + 1]) {
          k--;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return rtn;
};
