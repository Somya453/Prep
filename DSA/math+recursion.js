let num = 456982;

let count = 0; 

let reverse = 0;

while (num > 0) {
    let reminder = num % 10;
    reverse = reverse * 10 + reminder;
    num = Math.floor(num / 10);
    count++;
}

console.log(count);
console.log(reverse);