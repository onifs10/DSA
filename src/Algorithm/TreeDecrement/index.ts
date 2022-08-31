/**
 * given a tree of node represented as values , find the minimum cost of decrementing all the values to zero (0) using the following conditions
 * 
 * In a single operation, two nodes can be selected, and their values can be decremented by 1 at a cost equal to the distance between the two nodes, 
 *  i.e., the number of edges in the simple path between them.
 *  It is possible to select the same node for the operation and decrease its value by 2 at the cost of 0.
 */

/**
 * There are two components to the minimum possible cost involved: 
 *      -> 1 the total sum of weights on the nodes and 
 *      -> 2 the total number of times each edge is considered in a path chosen. 
 *  ==> The former part (1) is fixed. Thus, to minimize the cost, we optimize the total number of times an edge is selected in a path. 
 *      To minimize that, check whether there is an odd sum of weights in the left and right subtree of this edge over each edge. 
 *      If yes, then only this edge is added at a minimal cost because no pairing in either of the subtrees will be enough to make the total sum of weights 0.
 *      Thus, for all such edges, add 1 to the cost.
 * 
 * TODO: 
 *  yet to complete this
 */


 function getMinCost(val: number[], tNodes: number, tFrom: number[], tTo: number[]): number {

    // modulus of two
    for(let i = 0; i < val.length; i++){
        val[i] %= 2;
    }

    // create adjacent rep of the tree;
    const adj: number[][] = new Array(val.length).fill(0).map(v => []);

    for(let i = 0; i < tFrom.length; i++){
            const [u, v] = [tFrom[i] - 1, tTo[i] - 1];
            adj[u].push(v);
            adj[v].push(u);
    }
    console.log(adj)


    const dfS = (i: number) => {
        //TODO: complete this 
    } 
    return -1
 }


