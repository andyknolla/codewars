function highAndLow(numbers){
  const numbersArray = numbers.split(' ').map(item => Number(item));
  const firstNumber = numbersArray[0];
  if (numbersArray.length === 1) return firstNumber + ' ' + firstNumber;
  
  let highest = firstNumber;
  let lowest = firstNumber;
  
  for(var i = 1;i < numbersArray.length; i++) {
    if(numbersArray[i] > highest) highest = numbersArray[i];
    if(numbersArray[i] < lowest) lowest = numbersArray[i];
  }
  return highest + ' ' + lowest;
}

/* 7kyu
DESCRIPTION:
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/