console.log('We are in tut7')

// Arrays

let marks = [34, 23, 24, 93, 73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23,123,21, 'Orange');
console.log(arr);
console.log(mixed);
console.log(fruits);
console.log(fruits[1]); // It'll show the character on which value we specify.

console.log(arr.length);
console.log(Array.isArray(arr)); //It'll show True if the given is array otherwise shows False.

arr[0] = 'Rahul'; // We can change elements of array
console.log(arr);

let arrElement = arr[0];
console.log('element:', arrElement);

let value = marks.indexOf(73); // It'll show the value of the character specified
console.log(value)

// Mutating or Modifying Arrays  -- In this Original value is changing
console.log(marks);

marks.push(3543); // It'll put the given character in the end of the array
console.log(marks);

marks.unshift(1009); // It'll put the givem character in the start of the array.
console.log(marks);

marks.pop(); // It'll remove the last element of the array
console.log(marks);

marks.shift(); // It'll remove the first element of the array
console.log(marks);

marks.splice(2, 3); // It'll remove 3 element after 2nd element.
console.log(marks);

marks.reverse(); // It'll reverse the array.
console.log(marks);

let marks2 = [1,2,3,4];
marks = marks.concat(marks2); // It'll add another array specified in the original array at the last.
console.log(marks);

// Object

let myObj = {
    name: 'Rahul',
    'last name': 'Paul',
    company: 'QwikSol',
    isActive: true,
    marks: [1,2,3,4]
}

console.log(myObj); // It'll show as it is we typed
console.log(myObj.name); // It'll show only name
console.log(myObj['company']); // We can also write this
console.log(myObj['last name']);
console.log(myObj.isActive);