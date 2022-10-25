function twoSum(numbers, target) {
  let combo = [];
  numbers.forEach( (num, numbersIndex) => {
    const remainder = numbers.slice(numbersIndex + 1);
    const addendIndex = remainder.indexOf(target - num);
    
    if( addendIndex >= 0 && combo.length === 0) {
      const translatedAddendIndex = addendIndex + numbersIndex + 1;
      combo.push(numbersIndex, translatedAddendIndex);
    }
  });
  return combo;
}