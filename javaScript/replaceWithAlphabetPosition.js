function cleanString(text) {
  return 
}

function alphabetPosition(text) {
  var cleanedText = text.trim().toLowerCase().replace(/\s/g, "");
  var outputArray = [];
  
  [...cleanedText].forEach(element => {
    var ascii = element.charCodeAt();
    if(ascii >= 97 && ascii <= 122) {
      outputArray.push(ascii - 96)
    }                         
  });
  return outputArray.join(' ');
}