function wave(str){  
  return new Array(str.length)
    .fill(str)
    .map( (str, idx) => {
      const splitWord = str.split('');
      return splitWord.splice(idx, 1, str[idx].toUpperCase()).includes(' ') ? 
        '' :
        splitWord.join('') 
    })
    .filter(str => str != ''); 
}