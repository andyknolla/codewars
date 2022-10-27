const reverseSeq = n => {
  return Array.from({length:n}, (e, i) => n - i);
};

/* 8kyu
DESCRIPTION:
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/