function solution(str) {
  return str.split('').map(el => el.toUpperCase() != el ? el : ` ${el}`).join('');
}