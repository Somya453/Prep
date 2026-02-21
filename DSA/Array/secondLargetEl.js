let arr = [20, 15, 14, 35, 6, 51, 48];

let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) { 
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i];

    }
    else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i];
    }


    // if(secondMax === -Infinity){
    //     console.log("No second largest element found");
    // }
    // else {
    //     console.log("Second largest element is: " + secondMax);
    // }


}

console.log(secondMax);