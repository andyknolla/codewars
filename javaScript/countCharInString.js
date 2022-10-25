function count (string) {  
  return string.split('').reduce( (obj, current) => {
    if ( !obj.hasOwnProperty(current) ) obj[current] = 1;
    else obj[current] +=1;
    return obj;
  }, {});
}
