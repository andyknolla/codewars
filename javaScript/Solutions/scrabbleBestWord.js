function getBestWord(points,words){
  let highScore = 0;
  let highIdx = 0;
  let winningWord = null;
  words.forEach(( word, outerIdx) => {
    const score = word.split('').reduce((sum, current, idx) => {
      var letterScore = points[word.charCodeAt(idx) - 65];
      return letterScore ? sum += letterScore : 0; 
    }, 0);
   
   if (winningWord === null ||
       score > highScore ||
       score === highScore && word.length < winningWord.length
      ) {
      highScore = score;
      highIdx = outerIdx;
      winningWord = word;
    } 
  });
  return highIdx;
}

/* Scrabble best word
6kyu
Description
You're playing to scrabble. But counting points is hard.

You decide to create a little script to calculate the best possible value.

The function takes two arguments :

`points` : an array of integer representing for each letters from A to Z the points that it pays
`words` : an array of strings, uppercase

You must return the index of the shortest word which realize the highest score.
If the length and the score are the same for two elements, return the index of the first one. 

Learning:
Yet another reminder about Array.reduce. The flexibility of setting an initial value other than 0 caused
 a problem. Need to either set it to zero or leave it out. Calculating it separately and setting initial
 value manually causes the first operation to happen twice.
*/