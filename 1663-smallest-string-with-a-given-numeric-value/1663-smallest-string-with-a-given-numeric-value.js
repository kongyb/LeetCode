/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function toChar(num){
    let charArr=['a','b','c','d','e','f','g','h','i','j',
                 'k','l','m','n','o','p','q','r','s','t',
                'u','v','w','x','y','z']
    return charArr[num-1]
}

var getSmallestString = function(n, k) {
    let result=new Array(n).fill(1)
    k-=n
    let index=n-1
    while(k>25){
        result[index]+=25
        index--
        k-=25
    }
    result[index]+=k
    return result.map(el=>toChar(el)).join('')
};