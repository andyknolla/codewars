function solution(digits){
  let largest = Number( digits.substr(0, 5) );
  for(i=1;i<digits.length - 4;i++) {
  let next = Number( digits.substr(i, 5) );
    if(next > largest) {
      largest = next;
    }
  }
  return largest;
}
