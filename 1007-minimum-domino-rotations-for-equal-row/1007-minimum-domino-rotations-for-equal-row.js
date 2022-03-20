/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    let cntObj={1:0,2:0,3:0,4:0,5:0,6:0}
    let nums=[]
    for(let i=0;i<tops.length;i++){
        if(tops[i]===bottoms[i]){
            cntObj[tops[i]]++
        }
        else{
            cntObj[tops[i]]++
            cntObj[bottoms[i]]++
        }
    }
    for(const key in cntObj){
        if(cntObj[key]===tops.length){
            nums.push(Number(key))
        }
    }
    if(nums.length===0){
        return -1
    }
    let min=tops.length
    for(const num of nums){
        let cntTop=0
        let cntBot=0
        for(let i=0;i<tops.length;i++){
            if(tops[i]!==num){
                cntTop++
            }
            if(bottoms[i]!==num){
                cntBot++
            }
        }
        let cnt=Math.min(cntTop,cntBot)
        min=Math.min(cnt,min)
    }
    return min
};