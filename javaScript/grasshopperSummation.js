var summation = function (num) {
  var sum = 1
  for(var i = 2; i < num+1; i++) {
    sum = sum + i
  }
  return sum;
}