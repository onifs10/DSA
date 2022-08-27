/**
 * Prefix accumulation for 1D a container with a list of data stored contigiously 
 *  sum[i] = reducer(arr[i],  sum[i-1])
 *  i <= i < arr.length
 *  
 *  reducer performs the accumulation function
 */

import { Container, Container2D } from "../../types/index.type";




/**
 * a reducer interface that handles the acccumulation logic 
 */
export interface Reducer<T> {
    (prefixAcc: T, indexValue:T) : T;  
}

/** 
 * reducer interface for 2D containers 
 * param // coordinate of postion to evaluate 
 *     x : number
 *     y : number 
 */
export interface Reducer2D<T> {
    (x: number, y:number, matrix: Container2D<T>) : T;  
}

/**
 * inplace prefix accumulationc1D
 * space complexity O(1)
 * time complexity O(n)
 */
export const inplacePrefixAcc1D = <T>(arr: Container<T>, reducer:Reducer<T> ) : void  => {
    for (let i = 1; i < arr.length; i++){
        arr[i] = reducer(arr[i - 1], arr[i]);
    }
}


/**
 * prefix accumulation 1D
 * space complexity O(n)
 * time complexity O(n)
 * @param arr Container
 * @param reducer Reducer
 * @returns Container
 */
export const prefixAcc1D = <T>(arr: Container<T>, reducer:Reducer<T> ): Container<T> => {
    const result : T[] =  [arr[0]]
    for (let i = 1; i < arr.length; i++){
        result[i] = reducer(result[i -1], arr[i]);
    }
    return result;
}

/**
 * reducer for 2D container with type number
 * @param x number
 * @param y number
 * @param matrix Container2D<number>
 * @returns number
 */
export const default2dReducer = (x : number, y : number, matrix : Container2D<number>): number  => { 
    let top : number = matrix[x - 1]?.[y] ?? 0;
    let left : number = matrix[x][y - 1] ?? 0;
    let digonalLeft : number= matrix[x - 1]?.[y -1] ?? 0;
    return matrix[x][y] + top + left - digonalLeft;
}


/**
 * inplace prefix accumlation 2D 
 * space complexity O(1);
 * timeComplexity O(mn)
 * @param matrix Container2D
 * @param reducer Reducer2D
 */
 export const inplacePrefixAcc2D = <T>(matrix: Container2D<T>, reducer:Reducer2D<T>) : void  => {
    for (let x = 0; x < matrix.length; x++){
        for(let y = 0; y < matrix[x].length; y++){
            matrix[x][y] = reducer(x, y, matrix);
        }
    }
}

export const prefixAcc2D = <T>(matrix: Container2D<T>, reducer:Reducer2D<T>) : Container2D<T>  => {
    let outMatrix: Container2D<T> = [];

    for (let i = 0; i < matrix.length; i++){
        outMatrix.push([...matrix[i]]);
    }
    for (let x = 0; x < matrix.length; x++){
        for(let y = 0; y < matrix[x].length; y++){
            outMatrix[x][y] = reducer(x, y, outMatrix);
        }
    }
    return outMatrix;
}

