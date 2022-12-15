function duplicateEncode(word){
  return word.toLowerCase().split('').map((letter) => {
    const escapedLetter = letter.replace(/[\\[.+*?(){|^$]/g, "\\$&");    
    const regex = new RegExp(`${escapedLetter}`, 'g');
    let result = word.toLowerCase().match(regex);
    
    if (result && result.length > 1) return ")"
    else return "("
  }).join('');
}

module.exports = duplicateEncode;

/* Duplicate Encoder 6kyu 
Description:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/