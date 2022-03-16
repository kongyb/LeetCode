/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let matrix=[]
    for(let i=0;i<text1.length;i++){
        matrix.push(new Array(text2.length).fill(0))
    }
    
    for(let i=0;i<text1.length;i++){
        for(let j=0;j<text2.length;j++){
            if(text1[i]!==text2[j]){
                let upBlock=i-1>=0?matrix[i-1][j]:0
                let leftBlock=j-1>=0?matrix[i][j-1]:0
                matrix[i][j]=Math.max(upBlock,leftBlock)
            }
            else{
                let upLeftBlock=i-1>=0&&j-1>=0?matrix[i-1][j-1]:0
                matrix[i][j]=upLeftBlock+1
            }
        }
    }
    console.log(matrix)
    return matrix[text1.length-1][text2.length-1]
};