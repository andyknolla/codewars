// var testFirstThree = function(arr) {
//   var a = arr[0] - arr[1];
//   var b = arr[1] - arr[2];
//   var c = arr[2] - arr[3];
//   var progression;

//   if(a === b && b === c) {
//     progression = a;
//     return progression;
//   }
//   else {
//     return false;
//   }
// }

var checkList = function(arr, diff) {
  var listLength = arr.length;
      for(var i=0;i<listLength;i++) {
        if ( (arr[i] + diff) == (arr[i] + (arr[i+1])) ) {
          continue;
        } else {
          return arr[i] + diff;
        }
      }
};

var findMissing = function (list) {
  var a,b,c;
  if(list[0] >= 0) {
    a = list[1] - list[0];
    b = list[2] - list[1];
    c = list[3] - list[2];
    var progression;
  } else {
    a = list[0] - list[1];
    b = list[1] - list[2];
    c = list[2] - list[3];
  }
  if(a === b && b === c) {
    progression = a;
    return checkList(list, progression);
  } else if(a === b && b != c) {
    return list[2] + a;
  } else if(a != b && b === c) {
    return list[0] + b;
  } else if(a !=b && b !=c && a === c) {
    return list[1] + a;
  }
};
