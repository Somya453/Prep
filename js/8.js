let x = {}, y = { value: 10 }; z = { name: "John" };
x[y] = { name: "Ramesh" };
x[z] = { name: "Suresh" };

console.log(x[y]);


// Output: { name: "Suresh" }

// Explanation: In JavaScript, when using objects as keys in another object, they are converted to strings.
// Both 'y' and 'z' are converted to "[object Object]", so the second assignment overwrites the first one.
// Therefore, x[y] and x[z] refer to the same property in object 'x', which holds the value { name: "Suresh" }.


const a = { name: "Geeta", age: 21, city: "Delhi" };
let b= { ...a, country: "India" };
console.log(b);
console.log(xyz, b);

// Output: { name: "Geeta", age: 21, city: "Delhi", country: "India" }

// Explanation: The spread operator (...) is used to create a shallow copy of object 'a' and add a new property 'country' to it.
// The resulting object 'b' contains all properties of 'a' along with the new property.



console.log(pqr);
var pqr = 10;

// Output: undefined


// Explanation: Variable declarations using 'var' are hoisted to the top of their scope and initialized with 'undefined'.
// Therefore, when 'pqr' is logged before its assignment, it outputs 'undefined' instead of throwing a ReferenceError.

