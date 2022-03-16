/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack=[]
    let popIndex=0,pushIndex=0
    while(popIndex<popped.length){
        while(pushIndex<pushed.length&&popped[popIndex]!==pushed[pushIndex]){
            stack.push(pushed[pushIndex])
            pushIndex++
        }
        pushIndex++
        popIndex++
        while(stack.length>0&&popped[popIndex]===stack[stack.length-1]){
            stack.pop()
            popIndex++
        }
    }
    if(stack.length===0){return true}
    else{return false}
    
};