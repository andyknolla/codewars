// unfinished

function anagrams(word, words) {
  var letters = word.toLowerCase().split('');
  console.log(letters);
  for(var i=0;i<words.length;i++) {
  	if(words[i].length != word.length) {
    	words === words.splice(i,1);
    }
  }
  var result = words.filter(function(oneWord) {
    return oneWord.toLowerCase().split('').every(function(letter) {
      return letters.includes(letter);
    })
  })

  return result.filter(function(word) {
  	return letters.every(function(letter) {
    	return word.split('').includes(letter)
    })
  })
}


anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
anagrams('laser', ['lazing', 'lazy',  'lacer'])
