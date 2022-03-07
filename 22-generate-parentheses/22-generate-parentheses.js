/**
 * @param {number} n
 * @return {string[]}
 */
function generate(restPart,prev,result){
    let [head,tail]=restPart
    if(head===0&&tail===0){
        result.push(prev)
    }
    if(head>0){
        generate([head-1,tail],prev+'(',result)
    }
    if(head<tail){
        generate([head,tail-1],prev+')',result)
    }
}

var generateParenthesis = function(n) {
    let restPart=[n,n]
    let result=[]
    generate(restPart,'',result)
    return result
};