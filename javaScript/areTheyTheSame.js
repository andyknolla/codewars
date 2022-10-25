function comp(array1, array2){
  if(array1 && array2) {
   const array1Squared = array1.map(num => num*num).sort();
    return array2.sort().every((num, index) => {
      return num === array1Squared[index];
    });
  } else return false;
}