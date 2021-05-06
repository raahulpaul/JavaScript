console.log('Welcome to tut9');

// Loops
// General Loops: for, while, do-while

// some exponents
let a = 34;
a += 1;
a++;
console.log(a);

// for loop:

for(let i=0; i<100; i++){
    console.log(i);
}

// While loop - if j = 11; then loop will not print anything

let j = 0;
while(j<10){
    console.log(j+1);
    j+=1;
}

// do while - if k's value is bigger than the condition still it'll print one time.
{
let k = 0;

do {
    console.log(k+1);
    k++;
} while(k < 10);
}

// Break - whenever we want to stop
{
    let k = 0;
    
    do {
        console.log(k);
        if(k===5){
            break;
        }
        k++;
    } while(k < 10);
}

// Continue - whenever we want to skip
{
    let k = 0;
    
    do {
        if(k===5){
            k++;
            continue; // now it'll not print 6, it has been skipped.
        }
        console.log(k+1);
        k++;
    } while(k < 10);
}

// //////////////////////////////////

let arr = [2,3,4,5,6,3];
arr.forEach(function (element) {
    console.log(element);
})

// We can also use this as

arr.forEach(function (element, index, array) {
    console.log(element, index, array);
})

// ////// Old Method///////
for (let z = 0; z < arr.length; z++) {
    const element = arr[z];
    console.log(element);
}

//////////////////////////////////////

let obj = {
    name: "Rahul Paul",
    age: 20,
    skill: "Web Development",
    os: "JavaScript"
}

for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}