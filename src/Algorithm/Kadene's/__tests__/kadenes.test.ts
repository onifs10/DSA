import {kadene} from "../index";

test("test Kadene's algorithm", () => {
    const maxSun = kadene([1,0,-2,3,2,-3]);
    expect(maxSun).toBe(5);
})