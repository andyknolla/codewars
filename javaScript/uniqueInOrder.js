var uniqueInOrder = function(iterable) {
  if(iterable.length === 0) return [];
  
  var iterableArray = typeof(iterable) === "string" ? iterable.split('') : iterable;
  var previousElement = iterableArray[0];
  var processedArray = [iterableArray[0]];
  
  iterableArray.forEach(element => {
    if(element !== previousElement) processedArray.push(element);
    previousElement = element;
  })
  return processedArray;
}