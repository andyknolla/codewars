function stripWord(messyWord) {
  console.log('word: ', messyWord);
  // check each character ?
  return messyWord.split('').filter(letter => {
    const regex = new RegExp(/[a-z]/);
//     console.log('strip: ', regex.test(letter));
    return regex.test(letter);
  }).join('');
  
  // or test each word, then remove unwanted characters
}

function topThreeWords(text) {
  // lowercase the text, then create array of words by splitting on spaces
  
  // map through array of words, remove non-letters (either w/ regex or charCodeAt ranges)
  const words = text.toLowerCase().split(' ').map(word => {
    // remove whitespace and remove non-letter characters
    const regex = new RegExp(/(?=\S*['-])([a-zA-Z'-]+)/)      // (/\b[a-z]+(?:['-]?[a-z]+)*\b/);  // true if it's a word with apostrophe or hyphen
    return regex.test(word.trim()) ? word.trim(): stripWord(word.trim());
  });
  console.log(words)
  // frequency counter... reduce on words, adding a count for each one
  
  // find highest value in the frequency object

}