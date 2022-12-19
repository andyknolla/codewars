function isAValidMessage(message) {
  const numberCheck = new RegExp('^[a-zA-Z]|\\d$');
  if (numberCheck.test(message)) return false;
  
  var wordList = [...message.matchAll(/\d+[^\d]+/g)].map( (match) => match[0] );
  
  return wordList.every((combo) => {
    let wordNum = combo.match(/\d+/g)[0];
    let wordLength = combo.match(/[a-zA-Z]+/g)[0].length;
    return +wordNum === wordLength 
  });
}

module.exports = isAValidMessage;

/* Is Valid Message
6kyu
Description:
In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

Notes:

Messages are composed of only letters and digits
Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
If the message is an empty string, you should return true 

Learning:
This was good practice for Regular Expressions, using String.match, .matchAll, and RegExp.test. 
*/
