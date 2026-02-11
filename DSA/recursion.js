// Recursion is a programming technique where a function calls itself in order to solve a problem.

function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log("Factorial is:", factorial(5));