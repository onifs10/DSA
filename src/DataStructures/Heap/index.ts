import type {MaxHeapFuncs, Compare} from './helpers';
import {createMaxHeap, swap} from './helpers';


/**  max heap representation using arrays;
* asymptotic complexity:
*   - insert: O(nlog n)
*   - extractMax: O(nlog n)
* space complexity: O(n)
*
*/

class Heap<T>{
    constructor(private compare: Compare<T>, private array: Array<T> = []){
        // create max heap on intialization;
        this.heapify();
    }
    
    insert(value: T){
        this.array.push(value);
        this.heapify();
    }


    getArray(){
        return this.array;
    }

    extractMax(){
        if(this.array.length === 0){
            return undefined;
        }
        if(this.array.length === 1){
            return this.array.pop();
        }else{
            let max = this.array[0];
            let num = this.array.pop();
            if(num){
                this.array[0] = num;
            }
            this.heapify();
            return max;
        }
    }

    private heapify(){
        createMaxHeap(this.array, this.compare);
    }

    get size(){
        return this.array.length;
    }
}  

export default Heap;
