/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
function raiseRatio(c){
    if(!c){return 0}
    let [x,y]=c
    return (y-x)/(y**2+y)
}

function swap(heap,index1,index2){
    let temp=heap[index1]
    heap[index1]=heap[index2]
    heap[index2]=temp
    return
}

function heapPush(heap,c){
    heap.push(c)
    if(heap.length===1){return}
    let childIndex=heap.length-1
    let parentIndex=Math.ceil(childIndex/2)-1
    while(raiseRatio(heap[childIndex])>raiseRatio(heap[parentIndex])){
        swap(heap,childIndex,parentIndex)
        childIndex=parentIndex
        parentIndex=Math.ceil(childIndex/2)-1
        if(parentIndex<0){break}
    }
    return
}

function heapPop(heap){
    let head=heap[0]
    heap[0]=heap.pop()
    let parent=0
    let left=parent*2+1
    let right=parent*2+2
    while(raiseRatio(heap[parent])<Math.max(raiseRatio(heap[left]),raiseRatio(heap[right]))){
        let target=raiseRatio(heap[left])>raiseRatio(heap[right])?left:right
        swap(heap,parent,target)
        parent=target
        left=parent*2+1
        right=parent*2+2
    }
    return head
}

var maxAverageRatio = function(classes, extraStudents) {
    let heap=[]
    for(const c of classes){
        heapPush(heap,c)
    }
    for(let i=0;i<extraStudents;i++){
        let c=heapPop(heap)
        heapPush(heap,[c[0]+1,c[1]+1])
    }
    return heap.reduce((acc,curr)=>{
        return acc+(curr[0]/curr[1])/heap.length
    },0)
};