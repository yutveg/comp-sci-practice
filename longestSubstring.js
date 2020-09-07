var lengthOfLongestSubstring = function(s) {
    
    if (s.length === 0){
        return 0
    }
    
    let lettersInSubString = new Object()
    
    // keep track of a highestLength
    let highestLength = 1;
    
    // keep an index for start of string
    let currentLength = 0;
    
    // build a set as we go, empty the set once we set our highestLength
    for (let i = 0; i < s.length; i++){
        
        // Does our hashtable contain this letter?
        if (lettersInSubString[s[i]]){
            
            // reset currentLength 
            currentLength = 0;
            
            // starting one place ahead of duplicate value
            i = lettersInSubString[s[i]] + 1
            
            // start new empty hashtable
            lettersInSubString = new Object()
            
        }
        
        // add char to our hashtable with our current index
        lettersInSubString[s[i]] = i
        
        // increment length 
        currentLength += 1
            
        // check on our highestLength value
        highestLength =  currentLength > highestLength ? currentLength : highestLength
    }
    
    
    return highestLength
};

console.log(lengthOfLongestSubstring("abcabcbb"))