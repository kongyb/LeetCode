/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s[0]==='0'){
        return 0
    }
    if(s.length===1){
        return 1
    }
    let splitArr=[]
    for(let i=0;i<s.length;i++){
        if(s[i]==='0'){
            let prev=splitArr.pop()
            splitArr.push(prev*10)
        }
        else{
            splitArr.push(Number(s[i]))
        }
    }
    if(splitArr[0]>26){
        return 0
    }
    let cntArr=[1]
    for(let i=1;i<splitArr.length;i++){
        if(splitArr[i]>26){
            return 0
        }
        if(splitArr[i]>=10){
            cntArr.push(cntArr[cntArr.length-1])
            continue
        }
        if(splitArr[i-1]*10+splitArr[i]<=26){
            if(cntArr.length<2){
                cntArr.push(2)
            }
            else{
                cntArr.push(cntArr[cntArr.length-1]+cntArr[cntArr.length-2])
            }
        }
        else{
            cntArr.push(cntArr[cntArr.length-1])
        }
    }
    return cntArr[cntArr.length-1]
};