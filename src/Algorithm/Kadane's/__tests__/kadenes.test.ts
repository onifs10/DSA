import {kadane} from "../index";

test("test Kadane's algorithm", () => {
    const maxSun: number = kadane([1,0,-2,3,2,-3]);
    expect(maxSun).toBe(5);
})