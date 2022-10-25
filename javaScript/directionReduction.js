function dirReduc(arr){
  for(i = 0; i < arr.length-1; i++) {
    const combo = (arr[i] + arr[i+1]).toLowerCase();
    if(combo.includes('north') && combo.includes('south') ||
      combo.includes('east') && combo.includes('west'))
    {
      if(i == 0) return dirReduc(arr.slice(i+2));
      else       return dirReduc(arr.slice(0, i).concat(arr.slice(i+2)));
    }
  } 
  return arr;
}