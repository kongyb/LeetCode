/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationToTarget(numCnt,prev,result,target){
    if(target===0){
        result.push(prev)
        return
    }
    if(target<0||numCnt.length===0){
        return
    }
    let [value,cnt]=numCnt.shift()
    for(let i=0;i<=cnt;i++){
        combinationToTarget([...numCnt],[...prev],result,target)
        target-=value
        prev.push(value)
    }
    return
}

var combinationSum2 = function(candidates, target) {
    let map=new Map()
    for(const candidate of candidates){
        if(map.has(candidate)){
            map.set(candidate,map.get(candidate)+1)
        }
        else{
            map.set(candidate,1)
        }
    }
    let numCnt=Array.from(map)
    console.log(numCnt)
    let result=[]
    combinationToTarget(numCnt,[],result,target)
    return result
};