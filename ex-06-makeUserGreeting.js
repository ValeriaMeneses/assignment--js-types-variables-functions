/**
 * makeUserGreeting()
 * ------------------------------------------------------
 * Write a function called makeUserGreeting() that takes
 * (1) a string and (2) a boolean as arguments.
 *
 * The string-argument will be a username and the boolean-argument
 * will signify a true/false value for a returning customer.
 *
 * If the 2nd input is the boolean value `true`,
 * then the function should return a 'Good to see you again, «username».' greeting
 *    Ex: makeUserGreeting('Janet', true) //=> "Good to see you again, Janet."
 *
 * If the 2nd input is the boolean value `false`,
 * then the function should return a 'Welcome, «username»!' greeting
 *    Ex: makeUserGreeting('Janet', false) //=> "Welcome, Janet!"
 *
 * NOTE: Don't forget the comma and space and ending puctuation when building the string.
 **/

var name = '';
var boolean;
var char= '!'
var punto ='.'

function makeUserGreeting(name,boolean) {
  if (boolean === true) {
    var user = 'Good to see you again, ' + name + punto
    // console.log(user);
    return (user);

  } else if (boolean === false) {
    var otheruser = 'Welcome, ' + name + char
    // console.log(otheruser);
    return (otheruser);

  }

}


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

var funcOutput1 = makeUserGreeting("Atushi", true)
console.assert( funcOutput1  === "Good to see you again, Atushi." );

var funcOutput2 = makeUserGreeting("Mira", false)
console.assert( funcOutput2 === "Welcome, Mira!");

var funcOutput3 = makeUserGreeting("Nico", false)
console.assert(funcOutput3 !== "Good to see you again, Nico.");
