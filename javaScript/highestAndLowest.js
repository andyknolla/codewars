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
