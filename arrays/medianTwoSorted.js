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
