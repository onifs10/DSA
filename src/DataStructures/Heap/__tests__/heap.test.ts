import Heap from '../index';

test("first test", () => {
    let heap = new Heap<number>((a, b) => a > b, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    heap.insert(20);
    expect(heap.extractMax()).not.toBe(10);
    expect("a").toBe("a");
})
