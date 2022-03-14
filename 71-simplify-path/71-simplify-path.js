/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let result=[]
    let splitArr=path.split('/')
    for(const dir of splitArr){
        if(dir===''||dir==='.'){continue}
        else if(dir==='..'){
            result.pop()
            result.pop()
        }
        else{
            result.push('/')
            result.push(dir)
        }
    }
    return result.length===0?'/':result.join('')
};