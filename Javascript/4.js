console.log({} == {}); // false because different references

var a = 2000;
{
    var a = 4000;

}

let b = a;
{
    let b = 10000;
}

console.log(b)



//MAP Method
let arr = [1, 2, 3, 4, 5];

let result = arr.map((item) => item < 2);
console.log(result);


//REDUCE Method
let arr1 = [1, 2, 3, 4, 5];
let sum = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

