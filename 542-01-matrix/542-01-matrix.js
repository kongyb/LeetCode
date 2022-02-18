/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
// var updateMatrix = function(mat) {
//     let zero=[];
//     for(let i=0;i<mat.length;i++){
//         for(let j=0;j<mat[0].length;j++){
//             if(mat[i][j]===0){
//                 zero.push([i,j]);
//             }
//         }
//     }
//     for(let i=0;i<mat.length;i++){
//         for(let j=0;j<mat[0].length;j++){
//             if(mat[i][j]===1){
//                 let min=mat.length+mat[0].length+1;
//                 for(const el of zero){
//                     if(Math.abs(i-el[0])+Math.abs(j-el[1])<min){
//                         min=Math.abs(i-el[0])+Math.abs(j-el[1]);
//                     }
//                 }
//                 mat[i][j]=min;
//             }
//         }
//     }
//     return mat;
// };
var updateMatrix = function(mat) {
    let result = [], height = mat.length, width = mat[0].length;
    for (let i = 0; i < height; i++) {
        result.push(new Array(width).fill(Infinity));
    }
    
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (mat[i][j] === 0) {
                result[i][j] = 0;
            } else {
                if (i > 0) 
                    result[i][j] = Math.min(result[i][j], result[i-1][j] + 1);
                if (j > 0) 
                    result[i][j] = Math.min(result[i][j], result[i][j-1] + 1);
            }
        }
    }
    
    for (let i = height - 1; i >= 0; i--) {
        for (let j = width - 1; j >= 0; j--) {
            if (i < height - 1)
                result[i][j] = Math.min(result[i][j], result[i+1][j] + 1);
            if (j < width - 1)
                result[i][j] = Math.min(result[i][j], result[i][j+1] + 1);
        }
    }
    return result
};