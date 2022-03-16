/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let matrix=[]
    for(let i=0;i<word1.length;i++){
        matrix.push(new Array(word2.length).fill(0))
    }
    
    for(let i=0;i<word1.length;i++){
        for(let j=0;j<word2.length;j++){
            if(word1[i]!==word2[j]){
                let upBlock= i>=1?matrix[i-1][j]:0
                let leftBlock= j>=1?matrix[i][j-1]:0
                matrix[i][j]=Math.max(upBlock,leftBlock)
            }
            else{
                let upLeftBlock=i>=1&&j>=1?matrix[i-1][j-1]:0
                matrix[i][j]=upLeftBlock+1
            }
        }
    }
    let maxLen=matrix[word1.length-1][word2.length-1]
    return word1.length+word2.length-2*maxLen
};