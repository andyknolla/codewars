function openOrSenior(data){
  return data.map(numberPair => {
    if(numberPair[0] >= 55 && numberPair[1] > 7) {
      return 'Senior'
    } else return 'Open'
  });
}