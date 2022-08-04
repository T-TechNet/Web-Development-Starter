 // calling x after definition
//  var x = 5;
//  document.write(x, "\n");

 // calling y after definition
//   let y = 10;
//   document.write(y, "\n");

 // calling var z before definition will return undefined
//   document.write(z, "\n");
//   var z = 2;

 // calling let a before definition will give error
//   document.write(a);
//   let a = 3;

// let TTechNet = {     	// an object		
//     class: 'my class',  // by key 'class' store value 'my class'
//     student: 3          // by key 'student' store value 3
// };

// console.log(TTechNet.class);
// console.log(TTechNet.student);

// let user = {     	
//     name: 'user',  
//     student: 3,
//     isAdmin: false,
//     'edit posts': true
// };

// alert('Not an admin user!')
// alert('Not an admin user! ' + user.name)
// alert('Let\'s try multi words ' + user['edit posts']);

// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.apple ); // 5 if fruit="apple"


// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age,
//       // ...other properties
//     };
//   }


//   function makeUser(name, age) {
//     return {
//       name, // same as name: name
//       age,  // same as age: age
//       // ...
//     };
// }

function makeUser(name, age) {
    return {
      name, // same as name: name
      age:25  // same as age: age
      // ...
    };
}
  let user = makeUser("John", 30);
//   alert(user.age); // John

if(user.degree === undefined )
   alert('Try to understant how to define a property in an object!')