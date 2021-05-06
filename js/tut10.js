console.log('Welcome to tut10');

// Functions
// Example, why we use function.

let name = 'Rahul';
let name2 = 'Rohan';
console.log(`Happy Birthday ${name}, May god bless you.`);
console.log(`Happy Birthday ${name2}, May god bless you.`);
// Here you can see I need to declare name again and again if I need to wish another person.

// So we use Functions now

function greet(name, thank) {
    console.log(`Happy Birthday ${name}, May god bless you. ${thank}`);
}

// After defining a function you need to call it.

greet(name, 'Thanks a lot') // But if we remove thanks a lot then it'll show undefided for that we should use.
{
function greet(name, thank='Thank You') {
    console.log(`Happy Birthday ${name}, May god bless you. ${thank}`);
    return 4;
}

greet(name); //in this it'll take default value of ${thank}

// and we can also use it as.. var but for that we neet to return something from our function.

let val = greet(name, 'Thanks a lot');
console.log(val);
}
/////////////////////////////////////////////////////////////////////
{
function greet(name, thank='Thank You') {
    let msg=`Happy Birthday ${name}, May god bless you. ${thank}`;
    return msg;
}

let val = greet(name, 'Thanks a lot');
console.log(val);
} // Now it'll return message instead of 4.
//////////////////////////////////////////////////////
// We can also write it like below.
{
    const mygreet = function(name, thank='Thank You') {
        let msg=`Happy Birthday ${name}, May god bless you. ${thank}`;
        return msg;
    }
    
    let val = mygreet(name, 'Thanks a lot');
    console.log(val);
}
//////////////////////////////////////////////////////

const myobj = {
    name: "xPUNISHer",
    game: function(){
        return "GTA";
    }
}
console.log(myobj.game());
////////////////////////////////////////////////////////////

arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array) {
    console.log(element, array, index);
});

// SCOPE
console.log("SCOPE");

// let/const has block level scope!
// var has function level scope.

if(1){
    var i = 234; // if i use let here then it'll show error. To not get error we should declare it with let outside the block. otherwise this is also right.
    console.log(i);
}

console.log(i); //it is still 234;

function ui(name) {
    let i = 9;
    console.log(i); // here i is 9, here let is also working as var.
    return `This is a ${name} ui`;
}

console.log(ui("harry"), i); //here i is 234