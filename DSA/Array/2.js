let str = "Hello";

let strArr = str.split(" ");

let start = 0;

let end = strArr.length - 1;

while (start < end) {
    let temp = strArr[start];
    strArr[start] = strArr[end];
    strArr[end] = temp;

    start++;
    end--;
}

console.log(strArr.join(" "));

