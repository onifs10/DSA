import { EdgeWithWeight, Kruskal } from "../index";

test("test Kruskal's algorithm", () => {
    const edges:EdgeWithWeight[] = [
        [0,1,10],
        [0,2,6],
        [0,3,5],
        [1,3,15],
        [2,3,4]
    ]
    const MST = Kruskal(edges,4);
    expect(MST).toEqual([[2,3,4],[0,3,5],[0,1,10]]);
})
