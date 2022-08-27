/**
 * Prefix accumulation for 1D a container with a list of data stored contigiously 
 *  sum[i] = reducer(arr[i],  sum[i-1])
 *  i <= i < arr.length
 *  
 *  reducer performs the accumulation function
 */


/**
 * a container with a contigious set of data;
 */
export type Container<T> = Array<T> 

/**
 * a reducer interface that handles the acccumulation logic 
 */
export interface Reducer<T> {
    (prefixAcc: T, indexValue:T) : T;  
}


/**
 * inplace prefix accumulation
 * space complexity O(1)
 * time complexity O(n)
 */
export const inplacePrefixAcc1D = <T>(arr: Container<T>, reducer:Reducer<T> ) : void  => {
    for (let i = 1; i < arr.length; i++){
        arr[i] = reducer(arr[i - 1], arr[i]);
    }
}


/**
 * prefix accumulation
 * space complexity O(n)
 * time complexity O(n)
 */
export const prefixAcc1D = <T>(arr: Container<T>, reducer:Reducer<T> ): Container<T> => {
    const result : T[] =  [arr[0]]
    for (let i = 1; i < arr.length; i++){
        result[i] = reducer(result[i -1], arr[i]);
    }
    return result;
}
