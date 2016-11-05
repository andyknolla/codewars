var multiply = function(numArray) {
   var product = numArray[0];
   var arrayLength = numArray.length;
   for(var i=1;i<arrayLength;i++) {
     product *= numArray[i];
   }
   return product.toString;
}

function persistence(num) {
var numArray = num.toString().split(''); // array of digit strings
var product = multiply(numArray); //returns type number
var answer = 1;

  while (product.length > 1) {
     multiply(product);
     answer +=1;
  }

  return answer;

}
