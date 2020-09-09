var findMedianSortedArrays = (A, B) => {
    const merge = (A, B, i = 0, j = 0, C = []) => {
        for (
            ;
            i < A.length && j < B.length;
            C.push(A[i] < B[j] ? A[i++] : B[j++])
        );
        if (i == A.length) C.push(...B.slice(j)) // exhausted A, append remainder of B
        if (j == B.length) C.push(...A.slice(i)) // exhausted B, append remainder of A
        return C
    }
    const C = merge(A, B)
    const n = C.length,
        m1 = Math.floor(n / 2),
        m2 = Math.floor((n - 1) / 2)
    return n % 2 == 1 ? C[m1] : (C[m1] + C[m2]) / 2.0
}

const findMedianTwoSortedArrays = (nums1, nums2) => {
    // If nums1 is larger, swap references so nums1 is shortest array
    if (nums1.length > nums2.length) {
        ;[nums1, nums2] = [nums2, nums1]
    }

    let lo = 0
    let hi = nums1.length
    let combinedLength = nums1.length

    while (low <= hi) {
        // partitioning X in middle of nums1 array
        let partX = (lo + hi) / 2
        // partitioning Y such that there is an equal number
        // of elements on the combined right side of arrays
        // as there are on combined left sides
        let partY = (combinedLength + 1) / 2 - partX

        let leftX = getMax(nums, partX)
    }

    function getMax(nums, partition) {
        if (partition === 0) {
            return Number.NEGATIVE_INFINITY
        } else {
            return nums[partition - 1]
        }
    }
}
