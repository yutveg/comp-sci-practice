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
    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxarea;
}

// the reason this algorithm works is simple

// P.1) we have a height, and a width

// P.2) our height is capped by the shortest height (left or right)

// P.3) reducing our width while height stays the same will decrease our max area

// C.) moving off of our larger height value will always decrease the max area
// because our height will by definition stay the same and width will decrease
