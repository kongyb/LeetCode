/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s){
    let l=0,r=s.length-1
    while(l<r){
        if(s[l]!==s[r]){
            return false
        }
        l++
        r--
    }
    return true
}

var validPalindrome = function(s) {
    let l=0,r=s.length-1
    while(l<r){
        if(s[l]!==s[r]){
            return isPalindrome(s.slice(l+1,r+1))||isPalindrome(s.slice(l,r))
        }
        l++
        r--
    }
    return true
};