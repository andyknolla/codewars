function reverseWords(str) {
  const arr = str.split(' ');
  let arrayOfReversedWords = [];
  
  for(i = 0; i < arr.length; i++) {
    const wordArray = arr[i].split('');
    let reversedWord = [];
    
    for(j = 0; j < wordArray.length; j++) {
      reversedWord.unshift(wordArray[j]);
    }
    arrayOfReversedWords.push(reversedWord.join(''));
  }
  
  return arrayOfReversedWords.join(' ');
}