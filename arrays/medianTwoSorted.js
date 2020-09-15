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
  // flipping arrays so that nums1 is smallest or they are equal
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
  let x = nums1.length;
  let y = nums2.length;
  let low = 0,
    high = x;
  while (low <= high) {
    // Initializing partition X by halving the value and flooring any decimals
    const partitionX = (high + low) >> 1;
    // Initialize partition Y by halving the combined lengths (+1) and flooring, offset by the partition X

    // we offset by partition X so that the length of the combined elements of minX and minY are equal to (or +1 greater than)
    // the combined elements of maxX and maxY
    const partitionY = ((x + y + 1) >> 1) - partitionX;

    // Grabbing our value left of the partition X
    const maxX =
      partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    // Grabbing our value left of the partition Y
    const maxY =
      partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];

    // Grabbing our value right of the partition X
    const minX =
      partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX];
    // Grabbing our value right of the partition Y
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
