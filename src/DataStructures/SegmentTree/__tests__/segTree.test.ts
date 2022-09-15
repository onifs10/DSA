import {buildSegmentTree, getSum, updateTree} from "../index";


describe('test helper function in segment tree DS', () => {
    const data = [1,2,3];
    const acc = (a,b) => a + b;
    it('build segment tree', () => {
        const segTree = buildSegmentTree(data,acc);
        expect(segTree).toEqual([ 6, 3, 3, 1, 2 ])
    })
    
    it('query sum', () => {
        const segTree = buildSegmentTree(data,acc);
        const querySum = getSum(segTree,0,acc,0,3,0,1);
        expect(querySum).toBe(3);
    })

    it('update tree', () => {
        const segTree = buildSegmentTree(data,acc);
        updateTree(segTree,acc,0,2,1,3);
        expect(segTree).toEqual([ 7, 4, 3, 1, 3 ])
    })
})