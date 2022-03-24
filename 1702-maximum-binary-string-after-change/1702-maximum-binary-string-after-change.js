/**
 * @param {string} binary
 * @return {string}
 */
var maximumBinaryString = function(binary) {
    let zeros=0
    let smallZero,bigZero
    for(let i=0;i<binary.length;i++){
        if(binary[i]==='0'){
            if(zeros===0){
                smallZero=i
            }
            bigZero=i
            zeros++
        }
    }
    if(zeros<=1){
        return binary
    }
    let betweenZeros=bigZero-smallZero+1-zeros
    let result=new Array(bigZero).fill('1')
    result[bigZero-betweenZeros]='0'
    while(result.length<binary.length){
        result.push('1')
    }
    return result.join('')
};