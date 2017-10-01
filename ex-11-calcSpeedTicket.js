/**
 * calcSpeedTicket()
 * ------------------------------------------------------
 * Write a function that calculates a speeding ticket:
 *
 * The function should take 3 arguments:
 *    (1) the speed limit
 *    (2) the user's reported speed
 *    (3) a boolean value for whether the user was in
 *        a protected area (like a school-zone or work-zone)
 *
 * fine schedule:
 *   less than speed limit             : $0
 *   speeding ticket (< 20mph)         : $150
 *   speeding ticket (>= 20mph)        : $250
 *
 * If the user is in a protected area, the fine doubles.
 *
 * Examples:
 *  calcSpeedTicket(40, 30, false)
 *    => 0
 *
 *  calcSpeedTicket(20, 30, false)
 *    => 150
 *
 *  calcSpeedTicket(20, 31, true)
 *    => 300
 *
 *  calcSpeedTicket(50, 100, true)
 *    => 500
 *
 **/
var limit;
var user;
var boolean;

var nada = 0
var multa_uno = 150
var multa_dos = 250

function calcSpeedTicket (limit, user, boolean){
  var speeding = user-limit

  if (user <= limit) {
    // console.log(nada);
    return (nada)

  } else if (user > limit  &&  speeding < 20  &&  boolean === false) {
    // console.log(multa_uno);
    return (multa_uno)

  } else if (user > limit  &&  speeding < 20  &&  boolean === true) {
    // console.log(multa_uno*2);
    return (multa_uno*2)

  } else if (user > limit  &&  speeding >= 20  &&  boolean === true) {
    // console.log(multa_dos*2);
    return (multa_dos*2)

  } else if (user > limit  &&  speeding >= 20  &&  boolean === false) {
    // console.log(multa_dos);
    return (multa_dos)

  }
}





//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( calcSpeedTicket(25, 40, false) === 150  )
console.assert( calcSpeedTicket(65, 72, true) === 300  )
console.assert( calcSpeedTicket(75, 97, false) === 250 )
console.assert( calcSpeedTicket(55, 83, true) === 500  )

console.assert( calcSpeedTicket(30, 27, true) === 0  )
