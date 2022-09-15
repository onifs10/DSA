/**
 * A Segment Tree is a data structure that stores information about array intervals as a tree.
 *  It is data structure is a data stucture used for quick lookup of the information of a sub array in an array with. 
 * 
 * time complexity of O(log n)
 *      where n = length of array
 * 
 * sub array ? 
 *  for array a1 = [x1,y1] and a2 = [x2,y2] 
 *      where x is lower bound and y is upper bound 
 *      array a1 is a sub array of a2 iff 
 *             x1 >= x2 and y1 <= y2; 
 * 
 *  we can represent the segement matrix in an array of length 4n 
 */

import { Container } from "../../types/index.type";

type Accumulator<T> = (a:T, b:T) => T

/**
 * @param dataArray Container<T>
 * @param accumulator Accumulator<T>
 * @returns Container<T>
 */
export const buildSegmentTree = <T>(dataArray:Container<T>, accumulator: Accumulator<T>) => {
    // segment tree would be (0-indexed);
    const SegmentTree: Container<T> = [];
    const  createTree = (index:number,start: number, end: number): T => {
        if(start == end){
            SegmentTree[index - 1] = dataArray[start];
            return dataArray[start];
        }else{
            let mid = start + ~~((end - start) / 2);
            const left = createTree(index*2, start, mid);
            const right = createTree((index* 2) + 1, mid+1, end);
            const result = accumulator(left,right);
            SegmentTree[index - 1] = result;
            return result; 
        }
    }
    createTree(1,0, dataArray.length - 1);
    return SegmentTree;
}

/**
 * start & end are inclusive boundaries
 * @param tree Container<T>
 * @param baseline T
 * @param accumulator Accumulator<T>
 * @param start number
 * @param end number
 * @param l number
 * @param r number
 * @returns T
 */
export const getSum = <T>(tree: Container<T>,baseline:T, accumulator:Accumulator<T>,start:number, end:number ,l:number,r:number): T => {
    const getSumQuery = (index:number, start:number, end:number, l: number, r:number): T => {
        if(l > r){
            return baseline
        }
        if(l == start && r == end){
            return tree[index - 1];
        }
        let mid = start + ~~((end - start) / 2);
        const leftSum = getSumQuery(index * 2, start,mid , l,  mid);
        const rightSum = getSumQuery((index * 2) + 1,mid+ 1, end ,mid+1, r);
        return accumulator(leftSum, rightSum)
    }
    return getSumQuery(1,start,end,l,r);
}

/**
 * 
 * @param tree Container<T>
 * @param accumulator Accumulator<T>
 * @param start number
 * @param end number
 * @param pos number
 * @param val number
 */
export const updateTree = <T>(tree: Container<T>, accumulator:Accumulator<T>,start:number, end:number,pos:number,val:T) => {
    const update = (index:number,start:number, end:number) => {
        if(start == end){
            tree[index - 1] = val;
        }else{
            let mid = start + ~~((end - start) / 2);
            if(pos <= mid){
                 update(index * 2, start, mid);
            }else{
                update((index * 2) + 1, mid +1, end);   
            }
            tree[index - 1] = accumulator(tree[(index * 2) - 1], tree[index * 2]);
        }
    }
    update(1, start,end)
}