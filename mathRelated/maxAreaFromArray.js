function maxArea(height) {
  let maxarea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // comparing our max against the current area value
    maxarea = Math.max(
      maxarea,
      Math.min(height[left], height[right]) * (right - left)
    );

    // checking which line is smaller and thus, potentially bottlenecking our max
    if (height[left] < height[right]) l++;
    else right--;
  }
  return maxarea;
}
