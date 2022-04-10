/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let result=[]
    for(const char of ops){
        if(char==='C'){
            result.pop()
        }
        else if(char==='D'){
            result.push(result[result.length-1]*2)
        }
        else if(char==='+'){
            result.push(result[result.length-1]+result[result.length-2])
        }
        else{
            result.push(Number(char))
        }
    }
    return result.reduce((acc,curr)=>{
        return acc+curr
    })
};