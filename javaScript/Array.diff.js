function difference(arr1, arr2) {
    var counter = 0;
    var arr1Counter = arr1.indexOf(arr2[counter]);
    while(counter < arr2.length) {
         if( arr1.indexOf(arr2[counter]) != -1) {
           arr1.splice(arr1Counter, 1);
           console.log('arr1: ', arr1);
         } else
             counter +=1;
    }
  return arr1;
}

// Tests wouldn't work, but this passed in JSBin
