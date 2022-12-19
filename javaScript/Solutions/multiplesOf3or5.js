function multiples(top){
  let num = 3;
  let multiples = [];
  while (num < top) {
    if (num % 3 === 0 || num % 5 === 0) {
      multiples.push(num);
    } 
    num++;
  }
  return multiples.reduce((total, current) => {
    return total += current;
  }, 0);
}

// A simpler solution by other users:
function betterSolution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
module.exports = multiples;

/* Multiples of 3 or 5
6kyu

Description
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
 */