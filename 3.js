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
