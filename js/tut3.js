console.log('tut3');

// Variables in JS -- Variables are like containers in which we will put something. like we use a container to put Wheat.

// var, let, const

var name = 'Rahul';
var designation;
var marks = 45;
marks = 0;
designation = 'Web Developer';
console.log(name, designation, marks);

// Rules for Creating JS Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case Sensitive
*/

var city = 'Delhi';
console.log(city);

const ownersName = 'Thor';
// ownersName = 'Rahul'   --   It can't be possible, because we can't change constant
console.log(ownersName);

// const fruit;   --    for const we always have to provide some value in eqauls.


// var has global level scope, if we have declared it anywhere then it will always be there in whole code.
// let has block level scope, {} it always declares in this. So use let instead of var. it is convenient.

{
    let city = 'Mumbai';
    city = 'kolkata';
    console.log(city);
}

console.log(city);

const arr1 = [32, 22, 44, 55, 66];
arr1.push(33);  // It will increase a value in array.
// arr1 = [33, 66, 77, 88, 99];   --    It is not allowed because we declared array as constant.
console.log(arr1);


/* Most common Programing case types:

1. camelCase - In this case when we use a new word then we capitalize its first letter.
2. kebab-case - We use - between two words
3. snake_case - We use _ between two words
4. PascalCase - same as camelCase but it also has the first letter in Capital.
*/