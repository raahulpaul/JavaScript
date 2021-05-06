{
    let name = "Rahul";
    let tut = 11;
    console.log(`Welcome ${name} to tut ${tut}`);
}

// DOM - Document Object Module --> Used for Window(Global variable)

let a = window;
// window.alert('Heyy');   // Here we can use it without window, It'll work same.
// alert('heyy Rahul');

// a = prompt('Type your name:');   // It is used to get some value.

// a = confirm('Are you sure?');    // It is used to confirm, If you select ok then it'll print true, otherwise false.

a = window.document;

a = window.innerHeight;
                        // If we don't use window. still it'll give the same output.
a = window.innerWidth;

a = scrollX;

a = scrollY;

a = location;  // It'll give location 
a = location.reload;
a = location.href;
a = location.toString(); //It'll give full address with source

a = history;
a = history.go(-1); // It'll take you back to your histories
a = history.go(1); // It'll take you forward to the histories
a = history.length; // It'll tell you the length

console.log(a);
/////////////////////////////////////
