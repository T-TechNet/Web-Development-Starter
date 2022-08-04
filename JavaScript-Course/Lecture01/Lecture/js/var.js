// // calling x after definition

// var x = 5;
// document.write(x,"\n");

// // calling y after definition

// let var1 = 10;
// document.write(var1, "\n");

// // calling var z before definition will return undefined
// document.write(z, '\n');

// var z = 12;

// calling let a before definition will give error

// document.write(a);
// let a = 100;


// let TTechNet = {     	// an object		
//     class: 'my class',  // by key 'class' store value 'my class'
//     student: 3          // by key 'student' store value 3
// };

// console.log(TTechNet.class);
// console.log(TTechNet.student);

// let user = {     	
//     name: 'user',  
//     age: 30,
//     isAdmin: false,
//     'edit posts': true
// };

// alert('Not an admin user! ' + user["edit posts"]);

// let fruit = prompt ("Which fruit to buy?", "apple");

// let bag = {
//     [fruit]:5,
// }

// alert(bag.apple);

function makeUser(name, age) {
        return {
           name:name,
           age:age,
          // ...other properties
        };
      }

let user = makeUser("user01", 22);
// alert(user.age)

if(user.name === undefined)
alert('Try to understand how to define a property in an object!');