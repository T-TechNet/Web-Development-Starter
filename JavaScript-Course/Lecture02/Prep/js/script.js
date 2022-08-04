// let x = 1;

// x = -x;
// alert( x ); // -1, unary negation was applied

// alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
// alert( 8 % 3 ); // 2, a remainder of 8 divided by 3

// alert( 2 ** 2 ); // 2² = 4
// alert( 2 ** 3 ); // 2³ = 8
// alert( 2 ** 4 ); // 2⁴ = 16


// let s = "my" + "string";
// alert(s); // mystring

// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"


// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// alert( a ); // 3
// alert( c ); // 0


// let counter = 1;
// let a = ++counter; // (*)

// alert(a); // 2


// Comparison
// let x = 97;
// if(x === '97') console.log("They are equal!");


// || Operator

// let hour = 9;

// if (hour < 10 || hour > 18) {
//   alert( 'The office is closed.' );
// }

// Logical & Operator
// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//   alert( 'The time is 12:30' );
// }


// let year = prompt('In which year was \'Iron Man\' movie released?', '');

// if (year == 2008) alert( 'You are right!' );
// else alert('No! You are wrong');

// // Two Alerts
// if (year == 2008) {
//     alert( 'You are right!' );
//     alert('You are smart');
// }
// else alert('No! You are wrong');


// falsy condition

// if(false || null || undefined || "" || 0 || NaN){
//     console.log("This line won't ever execute");
// }
// else{
//     console.log("All false");
// }



// question mark operator
// let accessAllowed;
//  let age = prompt('How old are you?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);

// question mark
// let accessAllowed = age > 18 ? true : false;
// console.log(accessAllowed);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );