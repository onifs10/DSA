/**
 * Disjoint–Set Data Structure (Union–Find Algorithm)
 * Union find algorithm, is used in Disjoint set Data structure to merge disjoint set
 * Disjoint set are set where intersection with this two data set is null
 * 
 * A disjoint–set is a data structure that keeps track of a set of elements   
 * partitioned into several disjoint (non-overlapping) subsets. In other words, a
 * disjoint set is a group of sets where no item can be in more than one set. It is 
 * also called a union–find data structure as it supports union and find operation 
 * on subsets. Let’s begin by defining them:
 * 
 * 
 * Find: It determines in which subset a particular element is in and returns the 
 * representative of that particular set. An item from this set typically acts as a
 * “representative” of the set.
 * Union: It merges two different subsets into a single subset, and the 
 * representative of one set becomes representative of another.
 * 
 * The disjoint–set also supports one other important operation called MakeSet
 * which creates a set containing only a given element in it.
 */
import { threadId } from "worker_threads";
import { Container2D } from "../../types/index.type";

export class DisjointSet<T> {
  private setMap: Map<T, T>
  private setRank: Map<T, number>; 
  /**
   * this contructore takes in a group of disjoint set. make sure there is no union within any two set
   * @param sets Container<Container>
   */
  constructor(sets: Container2D<T>) {
    // map value to parent;
    this.setMap = new Map();
    this.setRank = new Map();
    for (const set of sets) {
      this.setRank.set(set[0], 1);
      for (let i = 0; i < set.length; i++){
        this.setMap.set(set[i], set[0])
      } 
    }
  }

  /**
   * find the set where the value belongs too 
   * @param setValue T
   * @returns T
   */
  find(setValue: T): T{
    while (this.setMap.get(setValue) != setValue) {
      setValue = this.setMap.get(setValue) as T
    }
    return setValue
  }

  /**
   * join two disjoint set
   * @param setValueA T
   * @param setValueB T
   */
  union(setValueA: T, setValueB: T) {
    let setA = this.find(setValueA);
    let setB = this.find(setValueB);
    let rankA = this.setRank.get(setA) as number;
    let rankB = this.setRank.get(setB) as number; 
    if (rankA > rankB) {
      this.setMap.set(setB, setA);
    } else if(rankA < rankB) {
      this.setMap.set(setA, setB);      
    } else {
      this.setMap.set(setA, setB);
      this.setRank.set(setB, this.setRank.get(setB) || 0 + 1)
    }
  }
}
