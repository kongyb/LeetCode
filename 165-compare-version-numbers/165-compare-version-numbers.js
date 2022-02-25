/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1=version1.split('.').map(el=>Number(el));
    let v2=version2.split('.').map(el=>Number(el));
    let maxLen=Math.max(v1.length,v2.length);
    for(let i=0;i<maxLen;i++){
        let element1=v1[i]===undefined?0:v1[i];
        let element2=v2[i]===undefined?0:v2[i];
        if(element1>element2){
            return 1;
        }
        else if(element1<element2){
            return -1;
        }
    }
    return 0;
};