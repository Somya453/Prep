let num = 121;
let originalNum = num;
let reverse = 0;

while (num > 0) {

    let rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
    
}



if (reverse === originalNum) {

    console.log("Palindrome");  
}
else {
    console.log("Not a palindrome number")
}
console.log(reverse);