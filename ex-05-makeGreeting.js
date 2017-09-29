/**
 * makeGreeting()
 * ------------------------------------------------------
 * Write a function called makeGreeting() that accepts a string username
 * returns a string value that greets the user.
 *
 *
 **/
var name = '';
var greet= 'Hello '
function makeGreeting(name) {
  var greets = greet + name
  // console.log(greets);
  return (greets);

}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

var funcOutput1 = makeGreeting("Atushi")
console.assert( funcOutput1  === "Hello Atushi" );

var funcOutput2 = makeGreeting("Mira")
console.assert( funcOutput2 === "Hello Mira");

var funcOutput3 = makeGreeting("Nico")
console.assert(funcOutput3 === "Hello Nico");
