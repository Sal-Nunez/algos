/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
    constructor() {
        /**
         * 0th index not used, so null is a placeholder. Not using 0th index makes
         * calculating the left and right children's index cleaner.
         * This also effectively makes our array start at index 1.
         */
        this.heap = [null];
    }

    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    top() {
        if (this.heap[1] === 0){
            return 0;
        } else return this.heap[1] ? this.heap[1] : null;
    }
    /**
     * Inserts a new number into the heap and maintains the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */
    insert(num) {
        if (this.heap.length === 1) {
            this.heap.push(num);
            return this;
        }
        this.heap.push(num)
        let index = this.heap.length - 1
        let newNumber = this.heap[index]
        let parent = this.heap[Math.floor(index/2)]
        if (newNumber > parent) {
            return this;
        } 
        while(newNumber < parent){
            [this.heap[index], this.heap[Math.floor(index/2)]] = [this.heap[Math.floor(index/2)], this.heap[index]]
            index = Math.floor(index/2)
            newNumber = this.heap[index]
            parent = this.heap[Math.floor(index/2)]
        }
        return this;
    }
    /**
     * Extracts the min num from the heap and then re-orders the heap to
     * maintain order so the next min is ready to be extracted.
     * 1. Save the first node to a temp var.
     * 2. Pop last node off and set idx1 equal to the popped value.
     * 3. Iteratively swap the old last node that is now at idx1 with it's
     *    smallest child IF the smallest child is smaller than it.
     * - Time: O(log n) logarithmic due to shiftDown.
     * - Space: O(1) constant.
     * @returns {?number} The min number or null if empty.
     */
    extract() {
        if (this.heap.length === 1){
            return null;
        }
        if (this.heap.length === 2){
            return this.heap.pop();
        }
        let temp = this.heap[this.heap.length - 1];
        this.heap[this.heap.length-1] = this.heap[1]
        this.heap[1] = temp
        let minNumber = this.heap.pop()
        let index = 1
        let childIndexLeft = index*2
        let childIndexRight = childIndexLeft + 1
        while(this.heap[index] > this.heap[childIndexLeft] || this.heap[index] > this.heap[childIndexRight]){
            console.log(this)
            if (this.heap[childIndexLeft] < this.heap[childIndexRight]){
                let temp = this.heap[index]
                this.heap[index] = this.heap[childIndexLeft]
                this.heap[childIndexLeft] = temp
            } else {
                let temp = this.heap[index]
                this.heap[index] = this.heap[childIndexRight]
                this.heap[childIndexRight] = temp
            }
        }
        console.log(this)
        return minNumber;
    }
}

const minHeap = new MinHeap();
// console.log(minHeap.top());
minHeap.insert(5);
minHeap.insert(6);
minHeap.insert(7);
minHeap.insert(8);
minHeap.insert(4);
minHeap.insert(1);
minHeap.insert(3);
console.log(minHeap.extract());
// console.log(minHeap.insert(0));
// console.log(minHeap.top());
