function breakCamelCase(str) {
  return str.split('').map(el => el.toUpperCase() != el ? el : ` ${el}`).join('');
}

/* 6kyu
DESCRIPTION:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/