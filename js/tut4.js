/* Data types in JS

Primitive data type -- Stack
    
    String -> "Rahul"
    Numbers -> 69
    Boolean-> true false
    Null
    Undefined
    Symbol -> ES6 - Comes in latest version

Reference data type -- Heap

    Arrays
    Object literals
    Functions
    Dates

*/ 

// PRIMITIVE DATA TYPES

// String
let name = 'Rahul';
console.log('my string is ' + name);
console.log("Data type is " + typeof name);

// Numbers
let marks = 69;
console.log(marks);
console.log("Data type is " + (typeof marks));

// Boolean
let isDriver = true;
console.log(isDriver);
console.log("Data type is " + (typeof isDriver));

// Null -- It'll show data type Object but it is primitive data type.
let nullVar = null;
console.log(nullVar);
console.log("Data type is " + (typeof nullVar));

// Undefined
let undef = undefined;
console.log(undef);
console.log("Data type is " + (typeof undef));


// REFERENCE DATA TYPES

// Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log(myarr);
console.log("Data type is " + (typeof myarr));

// Object Literals
let stMarks = {
    Rahul: 69,
    Rohan: 88,
    Deepak: 99
}
console.log(stMarks);
console.log("Data type is " + (typeof stMarks));

// Function
function findName() {
    
}

console.log(findName);
console.log("Data type is " + (typeof findName));

// Date
let date = new Date();
console.log(date);
console.log("Data type is " + (typeof date));