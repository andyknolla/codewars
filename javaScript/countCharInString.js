function count (string) {  
  return string.split('').reduce( (obj, current) => {
    if ( !obj.hasOwnProperty(current) ) obj[current] = 1;
    else obj[current] +=1;
    return obj;
  }, {});
}

/* 6kyu
DESCRIPTION:
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/