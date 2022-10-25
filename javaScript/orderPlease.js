function order(words){
  const wordOrder = words
    .split(' ')
    .map(word => word
       .split('')
       .filter(letter => Number(letter))
       .join()
    )
  const reordered = wordOrder.map((num, index) => {
    const oneBasedIndex = index + 1;
    return words.split(' ').find(word => word.split('').includes(String(oneBasedIndex)));
  });
  return reordered.join(' ');
}

// Original
// make into an array split on spaces
//     var wordsArray = words.split(' ');
//         var wordsArrayLength = wordsArray.length;
//     var newArray = [];
//         var newArrayLength = newArray.length;
//     var start = 1;
//   // for each array item, iterate, check each character for number
//     for(var i=0;newArrayLength < wordsArrayLength;i++) {
//         var thisWord = wordsArray[i];
//         for(var j=0;j<thisWord.length;j++) {
//             if( typeof( (thisWord.charAt(j) )/1) === 'number' ) {
//    // check if the found number is lowest...start lowest number var as 1 
//                if( thisWord.charAt(j) == start ) {
//                    newArray.push(thisWord);
//                     start +=1;
//                 }
//             }
//         }
//     }
//     return newArray.toString();
    // if there is no 1, increment var lowest
// }

/* 6kyu
DESCRIPTION:
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/