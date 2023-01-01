import { Container } from './../../types/index.type';
const sievePrimeNumberGen = (n:number): Container<number> => {
  if (n <= 1) {
      return []
  }
  const values: boolean[] = new Array(n + 1).fill(true);
  values[0] = false;
  values[1] = false
  for (let i = 2; i <= n; i++){
    if (values[i] == true) {
      for (let j = 2; j * i <= n; j++){
        values[j * i] = false;
      }
    }
  }
  let result:number[] = [];
  values.forEach((v: boolean, i: number) => { if (v) result.push(i) })
  return result;
}

export default sievePrimeNumberGen


// algorithm Sieve of Eratosthenes is
//     input: an integer n > 1.
//     output: all prime numbers from 2 through n.

//     let A be an array of Boolean values, indexed by integers 2 to n,
//     initially all set to true.
    
//     for i = 2, 3, 4, ..., not exceeding √n do
//         if A[i] is true
//             for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n do
//                 set A[j] := false

//     return all i such that A[i] is true.