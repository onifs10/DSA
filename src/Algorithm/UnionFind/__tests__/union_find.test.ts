import { Container2D } from './../../../types/index.type';
import { DisjointSet } from "../index";

describe("testing union find DS", () => {
 
  it("test find", () => {
    const DisjointSetData: Container2D<number> = [[1], [2, 3], [4]]
    
    const Djs = new DisjointSet(DisjointSetData);
    // expect 2 and 3 to be in the same union
    expect(Djs.find(3)).toBe(Djs.find(2))

    Djs.union(1, 2)

    expect(Djs.find(1)).toBe(Djs.find(3))    
  }) 
})