var decrement = function(array) {
    array.forEach(function(value) {
      value -=1;
    });
}
function queueTime(customers, n) {
  //TODO
  // if n == 0
  if(n === 0) {
    return 0;
  } else if (n === 1) {
  var sum = 0;
    for (var i=0;i<customers.length;i++) {
      sum +=customers[i];
    }
    return sum;
  } else if (n > customers.length) {
     return customers[customers.length -1];
  } else {
  // make new array n items long, starting from end
    var time = 0;
    var zero;
    var tills = customers.splice(customers.length - n, n);
console.log('tills ', tills);

  // decrement each value by 1, and increment a 'time' counter
    while(customers) { // decrement and shift as long as there are values in customers array
        decrement(tills);
        time +=1;

      // for each iteration, if array includes a 0(indexOf),
      // bring in the next value from array
        zero = tills.indexOf(0)

      // splice next value into the decrement array where ever
      // the zero was found
console.log('customers.pop ', customers.pop());
        tills.splice(zero,1,customers.pop());
    }
    
}
