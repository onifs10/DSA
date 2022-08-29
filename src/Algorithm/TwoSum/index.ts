/**
 * Giving a container with a list of number and a target , find two numbers that sum up to give that target
 *  
 */

import { Container } from "../../types/index.type";


type getTwoSum = (arr: Container<number>, target: number) => [number, number];

/**
 * This function finds the first two numbers that sum up to give that target
 * using an hash table approach 
 * @param arr Container<number>
 * @param target number
 * @returns [number, number]
 * sc => O(n)
 * tc => O(n)
 */
export const findTwoSumWithCache : getTwoSum = (arr, target) => {  
    // sc => O(n)  
    const cache : Map<number, number> = new Map();
    // tc => O(n)
    for(let index =0; index < arr.length;index++){
        const num = arr[index];
        const addition = target - num;
        // check if addition in memory
        if(cache.has(addition)){
            return [num, addition] 
        }
        // cache index
        cache.set(num, index)
    }
    return [-Infinity,-Infinity]
}

/**
 * This function finds the first two numbers that sum up to give that target
 * using two pointer approach
 * @param arr Container<number>
 * @param target number
 * @returns [number, number]
 * tc => O(nlogn) + O(n) ~= O(nlogn) 
 */
export const findTwoSumWithTwoPointer: getTwoSum = (arr, target) => {    
    // sort arr 
    // tc => O(nlogn)
    arr.sort((a,b) => a - b);
    let pointerOne = 0;
    let pointerTwo = arr.length -1;
    // tc => O(n)
    while(pointerOne < pointerTwo){
        if(arr[pointerOne] + arr[pointerTwo] > target){
            pointerTwo--
        }else if(arr[pointerOne] + arr[pointerTwo] < target){
            pointerOne++   
        }else{
            return [arr[pointerOne] , arr[pointerTwo]]
        }
    }
    return [-Infinity,-Infinity]
}