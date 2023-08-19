/**
 * Kadene's algorithm is an algorithm used to get the max sum of a sub array
 * 
 * localMaxSum[i] = max(localMaxSum[i -1], arr[i])
 * time complexity = O(n);
 */

import { Container, Container2D } from "../../types/index.type"

/**
 * function returns max sum for contigious sub array in an array
 * @param arr Container<number>
 * @returns number
 */
export const kadane = (arr : Container<number>) : number => {
    let local_max  = 0;
    let globalMax = -Infinity;
    for(let i = 0; i < arr.length; i++){
        local_max = Math.max(arr[i], (arr[i] + local_max));
        globalMax = Math.max(local_max, globalMax);
    }
    return globalMax;
}

/**
 * function that returns max sub rect sum
 * @param matrix Container2D
 * @returns number
 *  time complexity is O(n^2);
 */
export const getMaxSum2D = (matrix: Container2D<number>) : number => {
    // get kadane of all row sum for column left to right;
    const r = matrix.length;
    const c = matrix[0].length;
    let maxRectSum = 0;
    for(let left = 0; left < c; left++){
        const tempRowSum = new Array(r).fill(0);
        for(let right = left; right < c; right++){
            for(let i = 0; i < r; i++){
                tempRowSum[i] = tempRowSum[i] + matrix[i][right];
            }
            let maxRowSum = kadane(tempRowSum);
            maxRectSum = Math.max(maxRectSum, maxRowSum);
        }
    }
    return maxRectSum;
}