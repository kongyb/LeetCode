/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.pointer=k
    this.data=nums
    this.data.sort((a,b)=>b-a)
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let l=0,r=this.data.length
    let mid=Math.floor((l+r)/2)
    while(l<r){
        
        if(this.data[mid]===val){
            break
        }
        else if(val<this.data[mid]){
            l=mid+1
        }
        else{
            r=mid
        }
        mid=Math.floor((l+r)/2)
    }
    this.data.splice(mid,0,val)
    return this.data[this.pointer-1]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */