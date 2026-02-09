function a(...abc) {
    console.log(abc)
}

a(2, 3, 5);


//Temperal Dead Zone Example

//reverse a string
const str = "Hello, World!";
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr); // Output: !dlroW ,olleH


//Condition and corcion
if ([]==emptyArray) {
    console.log("This is true");
} else {
    console.log("This is false");
}


if ([]==true) {
    console.log("This is true");
} else {
    console.log("This is false");
}


if ([]) {
    console.log("This is true");
} else {
    console.log("This is false");
}