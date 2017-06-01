function alphabet(key) {
  const alphabet = {1:'a',2:'b',3:'c',4:'d',5:'e',6:'f',7:'g',8:'h',9:'i',10:'j',11:'k',12:'l',13:'m',14:'n',15:'o',16:'p',17:'q',18:'r',19:'s',20:'t',21:'u',22:'v',24:'w',25:'x',26:'y'}
  return alphabet[key];
}

function alphabetArray(index) {
  const arr = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return arr[index]
}

// str.replace(substr,function)

function movingShift(s, shift) {
  str = s.toLowerCase();
  for(let i=0;i<str.length;i++) {
    let char = charAt(i)
  	if(char != " ") {
    	str.replace(char, (char) => {

      })
    } else continue
  }
    return "";
}

function demovingShift(arr, shift) {
    return "";
}



var u = "I should have known that you would have a perfect answer for me!!!"
var v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]
//movingShift(u, 1)

// replace test
let dirka = 'dirka allah';
const letters = 'abcde';

function replace(str) {
	let coded = str.split('');

  for(let i=0;i<str.length +1;i++) {
   // if(coded[i] != ' ') {
      coded.splice(i,1, letters[i]);
    //}
  }
  return coded.join('');
}

replace(dirka);   // > abcde
