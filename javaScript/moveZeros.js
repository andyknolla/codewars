//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
var addZeros = function(arr, zeros) {
  while(zeros > 0) {
    arr.push(0);
    zeros -= 1;
  }
}

var moveZeros = function (arr) {
  var zeros = 0;
  var index = 0;
  while(index < arr.length) {
    if(arr[index] === 0) {
      arr.splice(index,1);
      zeros += 1;
    } else index +=1;
  }
  addZeros(arr, zeros);

  return arr;
}
