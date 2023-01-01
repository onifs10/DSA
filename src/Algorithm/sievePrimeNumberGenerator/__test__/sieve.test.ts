import { Container } from './../../../types/index.type';
import sievePrimeNumberGen from "../index";

describe("testing sieve algorithm for prime numbers", () => {
  it("test find primes in range 9", () => {
    const result: Container<number> = sievePrimeNumberGen(9);
    expect(result).toEqual([2,3,5,7])
  }) 
})