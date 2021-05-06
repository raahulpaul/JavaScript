console.log('Welcome to tut8');

// * == means check value & === means check value and type, != means not equal to. and !== means check value and type.

// If/Else Statement

const age = 19; // if it is string '19', then it is also working for == but it'll not work for ===

if (age == 19){
    console.log('Age is 19');
}

else if(age == 65){   // if we use else if then the program will not check other values. but when we use if again then it'll check for this too and print it.
    console.log('65');
}

else {
    console.log('Age is not 19');
}

////////////////////////////////////
const vari = 34;

if (typeof vari !== 'undefined'){
    console.log('vari is defined');
}

else{
    console.log('vari is not defined');
}

/////////////////////////////////////
const doesDrive = true;

if (doesDrive && age>18){  //  && means both the situations should be true
    console.log('You can drive');
}

else{
    console.log('You cannot drive');
}

/////////////////////////////////////////////

if (doesDrive || age>18){  //  || means only one situation should be true
    console.log('You can drive');
}

else{
    console.log('You cannot drive');
}

// Turnery Operator
console.log(age==45? 'Age is 45': 'Age is not 45');

// Switch cases

switch (age) {
    case 18:
        console.log("You are 18");
        break; // If we'll not use break then it will continue and print the other value specified below. Break is used to forget another values except the needy one.

    case 28:
        console.log("You are 28");
        break;
        
    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("Your age is Unknown");
        break;
}