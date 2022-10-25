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

/* 6kyu
DESCRIPTION:
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/