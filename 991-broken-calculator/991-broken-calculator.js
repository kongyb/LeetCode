/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function(startValue, target) {
    if(startValue===target){
        return 0
    }
    else{
        let doubleCnt=0
        while(startValue<target){
            doubleCnt++
            startValue*=2
        }
        let gap=startValue-target
        let depth=doubleCnt
        let decrementCnt=0
        while(gap>0){
            decrementCnt+=Math.floor(gap/Math.pow(2,depth))
            gap=gap%Math.pow(2,depth)
            depth--
        }
        return doubleCnt+decrementCnt
    }
};