
function josephusSurvivor(people, steps){
  // handle simplest case of people equaling one
  if(people === 1)  return 1;

  // create array of numbers, starting with 1, ending with people
  let arr = [1], num = 2;
  while(arr.length < people) {
  	arr.push(num);
    num++;
  }

  let pos = 0;

  while(arr.length > 1) {
    pos = (pos + steps - 1) % arr.length;
    arr.splice(pos, 1); // arr[4], which is 6. arr = [1,2,4,5,7]
  }
  return arr[0];
}

module.exports = josephusSurvivor;

josephusSurvivor(7,3)
josephusSurvivor(11,19)
josephusSurvivor(14,2)
