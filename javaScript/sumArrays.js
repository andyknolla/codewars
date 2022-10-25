function sum (numbers) {
  "use strict";
   return !numbers.length ? 0 : numbers.reduce((total, current) => total + current);    
};