let a = 15;
let b = 20;

let x = a;
let y = b;

while (b !== 0) {
    let rem = a % b;
    a = b;
    b = rem;
}

console.log("GCD is:", a);

let gcd = a;

let lcm = (x * y) / gcd;

console.log(lcm)