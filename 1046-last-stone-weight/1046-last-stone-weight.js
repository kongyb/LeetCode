/**
 * @param {number[]} stones
 * @return {number}
 */
class Heap{
    constructor(arr){
        this.data=[]
        for(const num of arr){
            this.push(num)
        }
    }
    swap(index1,index2){
        let temp=this.data[index1]
        this.data[index1]=this.data[index2]
        this.data[index2]=temp
        return
    }
    push(num){
        this.data.push(num)
        let child=this.data.length-1
        let parent=Math.ceil(child/2)-1
        while(this.data[child]>this.data[parent]){
            this.swap(child,parent)
            child=parent
            parent=Math.ceil(child/2)-1
        }
        return
    }
    pop(){
        if(this.data.length===0){
            return undefined
        }
        this.swap(0,this.data.length-1)
        let result=this.data.pop()
        let parent=0
        let child1=1
        let child2=2
        while(this.data[parent]<this.data[child1]||this.data[parent]<this.data[child2]){
            if(this.data[child1]<this.data[child2]){
                this.swap(parent,child2)
                parent=child2
            }
            else{
                this.swap(parent,child1)
                parent=child1
            }
            child1=parent*2+1
            child2=parent*2+2
        }
        return result
    }
    length(){
        return this.data.length
    }
}

var lastStoneWeight = function(stones) {
    let heap=new Heap(stones)
    while(heap.length()>1){
        let stone1=heap.pop()
        let stone2=heap.pop()
        if(stone1===stone2){continue}
        else{
            heap.push(stone1-stone2)
        }
    }
    if(heap.length()===0){
        return 0
    }
    else{
        return heap.pop()
    }
};