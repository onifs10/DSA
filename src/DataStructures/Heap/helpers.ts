import { Compare } from "../../types/index.type";

// interfaces
export interface MaxHeapify<T> {
    (array: Array<T>, index: number, compare: Compare<T>): void;
}
export interface MaxHeapFuncs<T> {
    (array: Array<T>, compare: Compare<T>): void;
}



export const swap = <T>(array: Array<T>, i: number, j: number) : void => {
    [array[i], array[j]] = [array[j], array[i]];
}


const heapify = <T>(array: Array<T>, i:number, compare:Compare<T>) : void =>  {
    // get the left and right child of the current index
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;
    if (left < array.length && compare(array[left], array[largest])) {
        largest = left;
    }
    if (right < array.length && compare(array[right], array[largest])) {
        largest = right;
    }
    if (largest !== i) {
        swap(array, i, largest);
        heapify(array, largest, compare);
    }
}


export const createMaxHeap = <T>(array:Array<T>, compare: Compare<T>) : void => {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapify(array, i, compare);
    }
}

