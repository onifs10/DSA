/** Algorithm to find the minimum number of interval groups containing a set of intervals with no intersection within the intervals
 * input  
 *  s: Array<Interval> // all the intervals which have possible intersection
 *  s[i] = [a,b] //interval  
 *      where: a -> start boundary
 *             b ->  end boundary (which might be exclusive)
 * 
 * what is intersection ?
 *  intersection is when we have to interval with boundaries existing within another intervals boundary
 *  that is for s[1] = [a1, b1] and s[2] = [a2, b2]
 *      a1 or b1 exist within the boundary [a2,b2]  
 *     
 * 
 * output 
 *  n:number 
 *      this is the number of minium interval groups with no intersection 
 */
import { Container, SortFunction } from "../../types/index.type" 

/**
 * functtion that defined the end boundary to be included or excluded
 */
export type DefineEndBoundary<T> = (boundary: T) => T

export const genMinNumOfGroups = <T>(intervals: Container<[T,T]> , defineEndBoundary: DefineEndBoundary<T>, sortFunction: SortFunction<T>) :number => {
    /**  
     * represent all the intervals boundary with an array [boundary, type] in an array 
     *  where boundary is the boundary value type T
     *  and typs is a number +1 or -1
     *      +1 : start 
     *      -1 : end 
    */

    const Boundaries: Container<[T, number]>  = [];
    
    for(const interval of intervals){
        // start boundary
        Boundaries.push([interval[0], +1]);
        // End boundary 
        Boundaries.push([defineEndBoundary(interval[1]), -1]);
    }

    // sort the Boundaries accounding in ascending order 
    Boundaries.sort((a,b) => sortFunction(a[0], b[0]));

    /** 
        next we take a sum of all the boundaries types, which would equal zero after summning all.
            but during the summation the max sub sum is the max nunber of groups   
    */
    let max = 0;
    let sum = 0;
    for (let i = 0; i < Boundaries.length; i++){
        /** we check if the current bundary are the next are the same
         *      if they are the same we just add this to the sum without checking the max.
         *      else we add and check for the max sum 
        */ 
        sum+=Boundaries[i][1];
        if(!(Boundaries[i][0] === Boundaries[i + 1]?.[0])){
            max = Math.max(sum, max);
        }            
    }
    
    return max
}