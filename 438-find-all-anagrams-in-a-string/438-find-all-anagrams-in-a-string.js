/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function stringCount(s){
    let result=new Map();
    for(const char of s){
        if(result.has(char)){
            result.set(char,result.get(char)+1);
        }
        else{
            result.set(char,1);
        }
    }
    return result;
}

function isAnagram(originMap,string){
    let countMap=new Map(originMap.entries())
    for(const char of string){
        if(!countMap.has(char)){
            return false;
        }
        else{
            countMap.set(char,countMap.get(char)-1);
            if(countMap.get(char)<0){
                return false;
            }
        }
    }
    return true;
}


var findAnagrams = function(s, p) {
    let answer=[];
    let originCount=stringCount(p);
    for(let i=0;i<=s.length-p.length;i++){
        if(originCount.has(s[i])&&isAnagram(originCount,s.slice(i,i+p.length))){
            answer.push(i);
            while(s[i]===s[i+p.length]){
                i++;
                answer.push(i);
            }
        }
    }
    return answer;
}
