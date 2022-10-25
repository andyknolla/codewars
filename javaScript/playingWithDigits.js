function digPow(n, p){
  const numArray = (n).toString().split('');
  const total = numArray.reduce( (prev, curr) => {
    const product = Math.pow(curr, p);
    p++;
    return prev + product
  }, 0);
  return total%n === 0 ? total / n : -1;
}