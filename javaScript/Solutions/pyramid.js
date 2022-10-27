function pyramid(num) {
  var x = 'x', space, result;
	for(var i=1;i <= num;i++) {
    space = '';
    for(var j=num - i;j > 0;j--) {
    	space = space + " ";
    }
  	console.log(space + x + space);
   // result = space + x + space + "\n";
    x = x + " x";
  }
  return result
}

function betterPyramid(num) {
	var x = 'x', space = ' ';
  space = space.repeat(num-1);;
  while(num > 0) {
    console.log(space + x + space);
    x = x + " x", num--;
    space = space.slice(1, space.length);
  }
}

//pyramid(5);
//     4____x
//		 3___x_x
//     2__x_x__x
//     1_x x x x
//      x x x x x
 betterPyramid(5);
