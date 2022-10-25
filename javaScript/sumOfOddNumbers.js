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
