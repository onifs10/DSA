import type {Reducer, Container} from "../index";
import  {inplacePrefixAcc1D, prefixAcc1D} from "../index";


describe("Prefix accumulation" , () => {
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