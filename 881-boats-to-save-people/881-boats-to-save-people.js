/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>a-b)
    let cnt=0
    let left=0,right=people.length-1
    while(left<=right){
        let big=people[right]
        let small=people[left]
        if(big+small<=limit){
            right--
            left++
        }
        else{
            right--
        }
        cnt++
    }
    return cnt
};