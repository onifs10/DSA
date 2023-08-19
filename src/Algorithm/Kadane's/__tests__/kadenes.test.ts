import { getMaxSum2D, kadane } from "../index";


test("test Kadane's algorithm", () => {
    const maxSun: number = kadane([1,0,-2,3,2,-3]);
    expect(maxSun).toBe(5);
})

test("Max sum of 2D container", () => {
    /**
     *  matrix
     *   ~~~~~~~~~~~
     *  | 1 ,  0 , 1 |
     *  | 0 , -2 , 3 |
     *   ~~~~~~~~~~~~
     */
    const maxSum : number = getMaxSum2D([[1,0,1],[0,-2,3]]); 
    /**
     * max rect sum is 1 + 3
     */

    expect(maxSum).toBe(4)
})