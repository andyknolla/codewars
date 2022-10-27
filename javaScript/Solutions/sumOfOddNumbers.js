function rowSumOddNumbers(n) {
  let num = 1;
  let sum = 0;
  for(let level = 1; level <= n; level++) {
    sum = 0;
    for(let position = 0; position < level; position++) {
      sum += num;
      num += 2
    }
  }
  return sum;
}

/* 7kyu
DESCRIPTION:
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 
*/