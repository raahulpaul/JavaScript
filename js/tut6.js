console.log('Welcome to tut6 :)');

const name = 'Rahul';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);

let html;
html = "<h1> This is Heading</h1>" +
        "<p> This is my Para</p>";
console.log(html);

// Another Method
html = html.concat('this', ' str2');
console.log(html);

// Some Functions
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);

console.log(html[0]);   // 0 means 1st character, 1 means 2nd character and so on.

console.log(html.indexOf('h1')); // shows the index of characeter, means at what position it is starting.
console.log(html.indexOf('jkhfkhfjs')); // shows -1 if the character is not in the string.
console.log(html.lastIndexOf('<')); // shows the last value of the character if is used multiple times
console.log(html.charAt('3')); // shows the character on which we specified the value.
console.log(html.endsWith('str2')); // it means if our string ends with this character then it'll show true otherwise false
console.log(html.includes('h1')); // it'll show true if the character we specify is in the string otherwise shows false
console.log(html.substring(1,6)); // It'll show characters from 1 to 5.
console.log(html.slice(-4)); // It'll show the last 4 characters of the string
console.log(html.slice(0, 4)); // It can also work as substring but substring can't work as slice.
console.log(html.split(' ')); // It'll give all elements in array by splitting it on the character we give. As in this case it is space.
console.log(html.replace('this', 'it')); // It'll replace this with it. but not all this in the string.

let fruit1 = 'Orange\''; // if i want to add ' in single quotes'' or double quotes"" we need to use black slash before.
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1>This is "my" Heading</h1>
            <p>You like ${fruit1} and ${fruit2}
            `;
                // But in black slash we can do everything like we can use Enter and use single double quotes.
document.body.innerHTML = myHtml; // It'll print this html into program