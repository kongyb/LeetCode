/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
    let cnt=[0,0]
    for(let i=0;i<s1.length;i++){
        if(s1[i]!==s2[i]){
            if(s1[i]==='x'){
                cnt[0]++
            }
            else{
                cnt[1]++
            }
        }
    }
    if((cnt[0]+cnt[1])%2===1){return -1}
    else if(cnt[0]%2===0){
        return cnt[0]/2+cnt[1]/2
    }
    else{
        return Math.floor(cnt[0]/2)+Math.floor(cnt[1]/2)+2
    }
};