/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let splitArr=s.split('')
    while(splitArr.length>1){
        let stack=[]
        for(const el of splitArr){
            if(el==='('){
                stack.push(el)
            }
            else if(el===')'){
                if(stack[stack.length-1]==='('){
                    stack.pop()
                    stack.push(1)
                }
                else if(typeof(stack[stack.length-1])==='number'&&stack[stack.length-2]==='('){
                    let prev=stack.pop()
                    stack.pop()
                    stack.push(prev*2)
                }
                else{
                    stack.push(el)
                }
            }
            else{
                if(typeof(stack[stack.length-1])==='number'){
                    let prev=stack.pop()
                    stack.push(el+prev)
                }
                else{
                    stack.push(el)
                }
            }
        }
        splitArr=stack
    }
    return splitArr[0]
};