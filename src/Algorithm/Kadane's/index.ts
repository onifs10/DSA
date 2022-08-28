/**
 * Kadene's algorithm is an algorithm used to get the max sum of a sub array
 * 
 * loaclMaxSum[i] = max(loacalMaxSum[i -1], arr[i])
 * time complexity = O(n);
 */

import { Container } from "../../types/index.type"

export const kadane = (arr : Container<number>) => {
    let local_max  = 0;
    let globalMax = -Infinity;
    for(let i = 0; i < arr.length; i++){
        local_max = Math.max(arr[i], (arr[i] + local_max));
        globalMax = Math.max(local_max, globalMax);
    }
    return globalMax;
}
