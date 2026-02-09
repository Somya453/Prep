let arr = ['Geeta', 'Ramesh', 'Suresh', 'Mahesh'];

function abc(arr) {
    let arr1 = arr[0].split("");
    let arr2 = arr[1].split("");
    
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1.includes(arr2[i])) {
            return true;
        }
    }
    return false;
}

console.log(abc(arr));



// Fibonacci Series --> 0 1 1 2 3 5 8 13 21 ...
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}


// Array of objects
let students = [
    { name: 'Geeta', age: 20 },
    { name: 'Ramesh', age: 22 },
    { name: 'Suresh', age: 21 }
]

let age=students.map((item)=>{return item.age<20});
console.log(age);




function abc(a,  ...b) {
    console.log(b, typeof b);
}


abc(10, 2, 8);