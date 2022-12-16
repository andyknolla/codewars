function findUniq(arr) {
  var subArr;
  for (var i = 0; i <= arr.length -3; i++) {
    subArr = arr.slice(i, i + 3);
    if (subArr[0] !== subArr[2]) {
      if (subArr[0] === subArr[1]) return subArr[2];
      if (subArr[1] === subArr[2]) return subArr[0];
      else return subArr[1];
    }
  }
}

module.exports = findUniq;

/* Find the unique number
6kyu
DESCRIPTION:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance. 

Learning:
A good opportunity for the "sliding window" pattern. 
*/