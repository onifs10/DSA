/**
 * Kruskal algorithm is an algo that is use to get the Minimum spanning tree MST in a graph
 * 
 */

import { DisjointSet } from "../UnionFind";

export type EdgeWithWeight = [number, number,number]



export const Kruskal = (edges:EdgeWithWeight[], vertices:number) => {
    // sort the edges by weight
    edges.sort((a,b) => a[2] - b[2]);
    // create a disjoint set
    const disjointSet = new DisjointSet<number>(new Array(vertices).fill(0).map((_,i) => [i,i]));
    const MST = [];
    for(let i = 0; i < edges.length; i++){
        const [u,v,w] = edges[i];
        if(disjointSet.find(u) !== disjointSet.find(v)){
            disjointSet.union(u,v);
            MST.push([u,v,w]);
        }
    }
    return MST;
}

