var multiply = function(numArray) {
   var product = numArray[0];
   var arrayLength = numArray.length;
   for(var i=1;i<arrayLength;i++) {
     product *= numArray[i];
   }
   return product.toString();
}

function persistence(num) {
var numArray = num.toString().split(''); // array of digit strings
var product = multiply(numArray); //returns type number

  if(numArray.length == 1) {
    return 0;
  } else {
    var answer = 1;

    while (product.length > 1) {
     product = multiply(product);
     answer +=1;
    }
    return answer;
  }
}


console.log('final ', persistence(39));
console.log('final ', persistence(4));
console.log('final ', persistence(1));
console.log('final ', persistence(0));
