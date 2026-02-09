// FILTER Method
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = arr.filter((item) => item > 5);
console.log(result);




// Conditonal Statements
if ("0") {              //Here "0" is a non-empty string which is truthy!
    console.log("I am present");
}
else {
    console.log("I am absent");
}


// Type Coercion Comparisons
console.log(null === undefined);
console.log(null == undefined);


// EVERY Method
let array=[{name:"Alice", age:25},
         {name:"Bob", age:30},
    { name: "Charlie", age: 35 }];
         
function checkArray(array) {
        let result = array.every((item) => item.age > 20);
        return result;
        
}
console.log(checkArray(array))