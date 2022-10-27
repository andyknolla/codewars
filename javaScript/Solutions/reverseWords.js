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

/* 7kyu
DESCRIPTION:
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/