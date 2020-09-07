var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) {
        return 0
    }

    let lettersInSubString = new Map()

    // keep track of a highestLength
    let highestLength = 1

    // keep an index for start of string
    let currentLength = 0

    // initializing our window boundary
    let leftBoundary = 0

    // build a map as we go, inserting and updating values
    for (let i = 0; i < s.length; i++) {
        // Does our map contain this letter?
        if (
            lettersInSubString.has(s[i]) &&
            lettersInSubString.get(s[i]) >= leftBoundary
        ) {
            // Reset current string length to avoid latest duplicate
            currentLength = i - (lettersInSubString.get(s[i]) + 1)

            // Reset leftBoundary
            leftBoundary = lettersInSubString.get(s[i]) + 1
        }

        // add or update char to our map with our current index
        lettersInSubString.set(s[i], i)

        // increment length
        currentLength += 1

        // check on our highestLength value
        highestLength =
            currentLength > highestLength ? currentLength : highestLength
    }

    return highestLength
}

console.log(lengthOfLongestSubstring('abcabcbb'))
