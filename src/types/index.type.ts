/**
 * a container with a contigious set of data;
 */
export type Container<T> = Array<T> 
export type Container2D<T> = Container<Container<T>>;
export interface Compare<T> {
    (a: T, b: T): boolean;
}
export interface SortFunction<T> {
    (a: T, b: T): number;
}

