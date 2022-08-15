// let arr = new Array();
// let arr = [];

// let fruits = ['Apple', 'Orange', 'Plum'];
// alert(fruits[0]); // Apple
// alert(fruits[1]); // Orange
// alert(fruits[2]); // Plum

// fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
// alert(fruits.length);

// alert(fruits);

// mix of values
// let arr = [
//   'Apple',
//   { name: 'John' },
//   true,
//   function () {
//     alert('hello');
//   },
// ];

// // get the object at index 1 and then show its name
// alert(arr[1].name); // John

// // get the function at index 3 and run it
// arr[3](); // hello

// Use your own example

//
// let fruits = ['Apple', 'Orange', 'Plum'];

// alert(fruits[fruits.length - 1]); // Plum

// let fruits = ['Apple', 'Orange', 'Plum'];

// // same as fruits[fruits.length-1]
// alert(fruits.at(-1)); // Plum

// Methods pop/push, shift/unshift
// pop
// let fruits = ['Apple', 'Orange', 'Pear'];

// alert(fruits.pop()); // remove "Pear" and alert it

// alert(fruits); // Apple, Orange

// push
// let fruits = ['Apple', 'Orange'];

// fruits.push('Pear');

// alert(fruits); // Apple, Orange, Pear

// Methods that work with the beginning of the array
// shift

// let fruits = ["Apple", "Orange", "Pear"];

// alert( fruits.shift() ); // remove Apple and alert it

// alert( fruits ); // Orange, Pear

// unshift
// let fruits = ["Orange", "Pear"];

// fruits.unshift('Apple');

// alert( fruits ); // Apple, Orange, Pear

// let fruits = ['Apple'];

// fruits.push('Orange', 'Peach');
// fruits.unshift('Pineapple', 'Lemon');

// // ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
// alert(fruits);

// // for loop
// let arr = ["Apple", "Orange", "Pear"];

// for (let i = 0; i < arr.length; i++) {
//   alert( arr[i] );
// }

// But for arrays there is another form of loop, for..of
// let fruits = ['Apple', 'Orange', 'Plum'];

// iterates over array elements
// for (let fruit of fruits) {
//   alert(fruit);
// }

// Technically, because arrays are objects, it is also possible to use for..in:
// let arr = ['Apple', 'Orange', 'Pear'];

// for (let key in arr) {
//   alert(arr[key]); // Apple, Orange, Pear
// }

// The loop for..in iterates over all properties, not only the
// numeric ones.

// There are so-called “array-like” objects in the browser and
// in other environments, that look like arrays. That is, they
// have length and indexes properties, but they may also have
// other non-numeric properties and methods, which we usually
// don’t need. The for..in loop will list them though. So if
// we need to work with array-like objects, then these “extra”
// properties can become a problem.

// The for..in loop is optimized for generic objects,
// not arrays, and thus is 10-100 times slower. Of course,
// it’s still very fast. The speedup may only matter in
// bottlenecks. But still we should be aware of the difference.

// length

// let fruits = [];
// fruits[123] = 'Apple';

// alert(fruits.length); // 124

// let arr = [1, 2, 3, 4, 5];

// arr.length = 2; // truncate to 2 elements
// alert(arr); // [1, 2]

// arr.length = 5; // return length back
// alert(arr[3]); // undefined: the values do not return

// Multidimensional arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

alert(matrix[1][1]); // 5, the central element
