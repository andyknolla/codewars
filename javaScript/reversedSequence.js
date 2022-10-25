const reverseSeq = n => {
  return Array.from({length:n}, (e, i) => n - i);
};