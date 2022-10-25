function SeriesSum(n) {
  let sum = 0;
  let denom = 1;
  for(var i = 0; i < n; i++) {
    sum += 1/denom;
    denom += 3;
  }
  return sum.toFixed(2);
}
