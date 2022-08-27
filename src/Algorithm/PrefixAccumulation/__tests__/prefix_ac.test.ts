import { Container, Container2D } from "../../../types/index.type";
import type {Reducer} from "../index";
import  {inplacePrefixAcc1D, prefixAcc1D, inplacePrefixAcc2D,prefixAcc2D,default2dReducer} from "../index";

describe("Prefix accumulation 1D" , () => {
    it('test inplace accumulation', () => {
        const reducer: Reducer<number>  = (prefixSum, item) => prefixSum + item;
        const list: Container<number> = [1,0,4,6,-2];
        inplacePrefixAcc1D(list, reducer);
        expect(list).toEqual([1,1,5,11,9]);
    })

    it('test accumulation' , () => {
        const reducer: Reducer<number>  = (prefixSum, item) => prefixSum + item;
        const list: Container<number> = [1,0,4,6,-2];
        const result = prefixAcc1D(list, reducer);
        expect(result).toEqual([1,1,5,11,9]);
    })
})

describe("Prefix accumulation 2D" , () => {
    
    it('test inplace accumulation', () => {
        const matrix : Container2D<number> = [[1,0,1],[0,-2,3]];
        inplacePrefixAcc2D(matrix, default2dReducer);
        expect(matrix).toEqual([ [ 1, 1, 2 ], [ 1, -1, 3 ] ]);
    })

    it('test accumulation' , () => {
        const matrix : Container2D<number> = [[1,0,1],[0,-2,3]];
        const matrixSum = prefixAcc2D(matrix, default2dReducer);
        expect(matrixSum).toEqual([ [ 1, 1, 2 ], [ 1, -1, 3 ] ]);
    })
})