/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function uniqueArr(arr){
    let result=[];
    for(const subArr of arr){
        let str=subArr.sort().join(' ');
        if(!result.includes(str)){
            result.push(str);
        }
    }
    return result.map(el=>el.split(' '));
}

var combinationSum = function(candidates, target) {
    let sumArr=new Array(target+1)
    sumArr[0]=[[]];
    for(let i=1;i<=target;i++){
        sumArr[i]=[];
        for(const num of candidates){
            if(i-num<0){
                continue;
            }
            else{
                sumArr[i]=sumArr[i].concat(sumArr[i-num].map(el=>[...el,num]));
            }
        }
    }
    return uniqueArr(sumArr[target]);
};