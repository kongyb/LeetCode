/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class Heap{
    constructor(arr){
        this.data=[]
        this.cntObj={}
        for(const num of arr){
            if(this.cntObj[num]){
                this.cntObj[num]++
            }
            else{
                this.cntObj[num]=1
            }
        }
        for(const key in this.cntObj){
            this.push(key)
        }
    }
    
    swap(index1,index2){
        let temp=this.data[index1]
        this.data[index1]=this.data[index2]
        this.data[index2]=temp
    }
    
    push(num){
        this.data.push(num)
        let child=this.data.length-1
        let parent=Math.ceil(child/2)-1
        while(this.cntObj[this.data[child]]>this.cntObj[this.data[parent]]){
            this.swap(child,parent)
            child=parent
            parent=Math.ceil(child/2)-1
        }
        return
    }
    
    pop(){
        this.swap(0,this.data.length-1)
        let result=this.data.pop()
        let parent=0
        let left=parent*2+1,right=parent*2+2
        while(this.cntObj[this.data[parent]]<this.cntObj[this.data[left]]||
              this.cntObj[this.data[parent]]<this.cntObj[this.data[right]]){
            if(this.cntObj[this.data[left]]>(this.cntObj[this.data[right]]||0)){
                this.swap(parent,left)
                parent=left
            }
            else{
                this.swap(parent,right)
                parent=right
            }
            left=parent*2+1
            right=parent*2+2
        }
        return result
    }
}

var topKFrequent = function(nums, k) {
    let heap=new Heap(nums)
    let result=[]
    for(let i=0;i<k;i++){
        result.push(heap.pop())
    }
    return result.map(el=>Number(el))
};