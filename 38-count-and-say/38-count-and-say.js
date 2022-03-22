/**
 * @param {number} n
 * @return {string}
 */
function makeStr(str){
    let result=[]
    let index=1
    let temp=str[0]
    while(index<str.length){
        if(str[index-1]===str[index]){
            temp+=str[index]
            index++
        }
        else{
            result.push(temp)
            temp=str[index]
            index++
        }
    }
    result.push(temp)
    return result.map((el)=>{
        return el.length+el[0]
    }).join('')
}

var countAndSay = function(n) {
    if(n===1){
        return '1'
    }
    let temp=countAndSay(n-1)
    return makeStr(temp)
};