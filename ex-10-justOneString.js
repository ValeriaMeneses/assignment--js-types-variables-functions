/**
 * justOneString()
 * ------------------------------------------------------
 * Using logical operators, write a function called `justOneString()`
 * that accepts two arguments and will return true if either input is a string,
 * but returns false if both arguments or neither are strings
 *
 **/
var int;
var cadena;

function justOneString(int, cadena) {
  if (typeof int=== 'string' && typeof cadena === 'number' || typeof int=== 'number' && typeof cadena=== 'string') {
    // console.log('true');
    return (true);

  }else {
    // console.log('false');
    return (false);
  }



}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert(justOneString('a', 5) === true)
console.assert(justOneString(6, 'dotron') === true)
console.assert(justOneString('peanut', 'butter') === false)
console.assert(justOneString(8, true) === false)
