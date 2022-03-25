/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    while(n>0){
        let rest=n%3
        if(rest===2){
            return false
        }
        n=Math.floor(n/3)
    }
    return true
};