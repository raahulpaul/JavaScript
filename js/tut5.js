// Type Conversion 
console.log('Welcome to Tut4'); 

let myVar;
myVar = 34;
console.log(myVar, (typeof myVar));

// Conversion in String

myVar = String(34);
console.log(myVar, (typeof myVar));

// Boolean
let booleanVar = true;
console.log(booleanVar, (typeof booleanVar));

// Conversion in String
booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

// DATE
let date = new Date();
console.log(date, (typeof date));

// Conversion in string
date = String(new Date());
console.log(date, (typeof date));

// Array -- Length means no. of elements.. therefore it is showing 5
let arr = [1,2,3,4,5];
console.log(arr.length, (typeof arr));

// Conversion in string -- Length means no. of characters.. therefor it is showing 9
arr = String([1,2,3,4,5]);
console.log(arr.length, (typeof arr));

/////////////////////////////////
// toString
let i = 4;
console.log(i.toString());

/////////////////////////////////////
// String
let stri = "3434";
console.log(stri, (typeof stri));

// conversion in Number
stri = Number("3434");
console.log(stri, (typeof stri));

// If not a Number it shows NaN
stri = Number("34d34");
console.log(stri, (typeof stri));

//If boolean
stri = Number(true);
console.log(stri, (typeof stri));

stri = Number(false);
console.log(stri, (typeof stri));

// ////////////////////////////
// parseInt
let number = Number('34.098');
console.log(number, (typeof number));

number = parseInt('34.098');
console.log(number, (typeof number));

number = parseFloat('34.098');
console.log(number, (typeof number));

// toFixed() --- No. of decimal points you want to see
number = Number('34.098');
console.log(number.toFixed(), (typeof number));

number = Number('34.098');
console.log(number.toFixed(20), (typeof number));

//////////////////////////////////////////////////////////////////////////////
// Type Coercion

// if both string and number are added. JS converts no. into string and then coercion it. Therefore its answer is 69834.
{
let myStr = "698";
let myNum = 34;
console.log(myStr + myNum);
}

// If both are number. Then it added as always. Therefore its answer is 732
{
    let myStr = Number("698");
    let myNum = 34;
    console.log(myStr + myNum);
}