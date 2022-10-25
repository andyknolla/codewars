function sumTwoSmallestNumbers(numbers) {
  const [a, b, ...rest] = numbers.sort((a, b) => b < a ? 1 : -1);
  return a + b;
}