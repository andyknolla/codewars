function alphabet(key) {
  const alphabet = {1:'a',2:'b',3:'c',4:'d',5:'e',6:'f',7:'g',8:'h',9:'i',10:'j',11:'k',12:'l',13:'m',14:'n',15:'o',16:'p',17:'q',18:'r',19:'s',20:'t',21:'u',22:'v',24:'w',25:'x',26:'y'}
  return alphabet[key];
}

function movingShift(s, shift) {
    return "";
}

function demovingShift(arr, shift) {
    return "";
}

// 6-3

var u = "I should have known that you would have a perfect answer for me!!!"
var v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]
//movingShift(u, 1)

// replace test
let dirka = 'I should not have known poop turd butt dong stuff dirka that you would have a perfect answer for me';

function split(sentenceString) {
	let sentenceArray = sentenceString.split(' ');
  let firstChunks = sentenceArray.length%5;
  let otherChunks = sentenceArray.length/5;
  let answer = [];
  while(sentenceArray.length > 0) {
  	answer.push( sentenceArray.splice(0, answer.length < firstChunks ? Math.ceil(otherChunks) : Math.floor(otherChunks) ).join(' ') );
  }
  return answer
}

function replace(str, initialShift) {
  const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	let coded = str.toLowerCase().split('');
	console.log(coded)

  for(let i=0, shift = initialShift;i<str.length +1;i++, shift++) {
    let start = arr[ arr.indexOf( str[i] ) ];
    if(coded[i] != ' ') {

      if(shift - (26 - start) < 0 ) {
      	coded.splice( i,1, arr[ arr.indexOf(str[i]) + shift] );
      } else {
      	coded.splice( i,1, arr[ shift - (26 - start) ] );
      }

    } else continue
  }
  console.log(coded)
  coded[0] = coded[0].toUpperCase();

   return split(coded.join(''));

  return coded.join('');
}

replace(dirka, 1);   // > abcde

//arr[ arr.indexOf(dirka[2]) ]
