/**
 * @param {number[][]} costs
 * @return {number}
 */
function longToShort(long,short,costs){
    let num=long.length-costs.length/2
    long.sort((a,b)=>{
        let difA=Math.abs(costs[a][0]-costs[a][1])
        let difB=Math.abs(costs[b][0]-costs[b][1])
        if(difA-difB<0){
            return -1
        }
        else{
            return 1
        }
    })
    short=short.concat(long.slice(0,num))
    long=long.slice(num)
    return [long,short]
}

var twoCitySchedCost = function(costs) {
    let first=[]
    let second=[]
    for(let i=0;i<costs.length;i++){
        let [a,b]=costs[i]
        if(a<b){
            first.push(i)
        }
        else{
            second.push(i)
        }
    }
    if(first.length<costs.length/2){
        [second,first]=longToShort(second,first,costs)
    }
    else if(first.length>costs.length/2){
        [first,second]=longToShort(first,second,costs)
    }
    let sum=0
    for(let i=0;i<first.length;i++){
        sum+=costs[first[i]][0]
        sum+=costs[second[i]][1]
    }
    return sum
};