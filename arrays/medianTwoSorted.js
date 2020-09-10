var findMedianSortedArrays = (A, B) => {
  const merge = (A, B, i = 0, j = 0, C = []) => {
    for (; i < A.length && j < B.length; C.push(A[i] < B[j] ? A[i++] : B[j++]));
    if (i == A.length) C.push(...B.slice(j)); // exhausted A, append remainder of B
    if (j == B.length) C.push(...A.slice(i)); // exhausted B, append remainder of A
    return C;
  };
  const C = merge(A, B);
  const n = C.length,
    m1 = Math.floor(n / 2),
    m2 = Math.floor((n - 1) / 2);
  return n % 2 == 1 ? C[m1] : (C[m1] + C[m2]) / 2.0;
};

var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
  let x = nums1.length;
  let y = nums2.length;
  let low = 0,
    high = x;
  while (low <= high) {
    const partitionX = (high + low) >> 1;
    const partitionY = ((x + y + 1) >> 1) - partitionX;

    const maxX =
      partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const maxY =
      partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];

    const minX =
      partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX];
    const minY =
      partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      const lowMax = Math.max(maxX, maxY);
      if ((x + y) % 2 == 1) return lowMax;
      return (lowMax + Math.min(minX, minY)) / 2;
    } else if (maxX < minY) {
      low = partitionX + 1;
    } else high = partitionX - 1;
  }
};
