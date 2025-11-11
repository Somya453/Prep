//Q.1- Find the second longest word in a given string.

const str = 'This is a test string.'; 

function longestWord(str) {
    let longest = ' ';

    // Second largest variable declared but not used
    let secondLongest = ' ';
    let words = str.split(' ');
    for (let word of words) {
        if(word.length > longest.length) {
            longest = word;
        }
        else if (word !== longest && word.length > secondLongest.length) {
            secondLongest = word;
        }
    }
    return secondLongest;
}

let result = longestWord(str);
console.log(result);




//Q.2- Find out the sumation to get the sum 17, now 17 how we get the sum with the elements of the array
const arr = [2, 3, 5, 7, 10, 13];
function summation(arr) {

    let startingNumber = 0; 
    for (let i = 0; i < arr.length; i++){
        const el = arr[i];
        
        if (startingNumber && el !== 17) {
            startingNumber += el;
        }

        else {
            console.log(el);
        }
    }

    return startingNumber;
}

let sumResult = summation(arr);
console.log(sumResult);


// Q.3- Check if the given input is NaN or not.
console.log(isNaN('krishna'));
console.log(isNaN(123));
console.log(isNaN(NaN));
console.log(isNaN(undefined));


// Map Method --> Provide a new array with modified values
const numbers = [1, 2, 3, 4, 5];
let double = numbers.map((item) => item > 2);
console.log(double); 

