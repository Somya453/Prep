console.log(0.1+0.2===0.3)

console.log(0.1 + 0.3 === 0.4)
const obj = {
    a: 1,
    b: 2

}

// Convert into string
const rslt = JSON.stringify(obj)
console.log(rslt)


//reduce method
const arr = [1, 2, 3, 4, 5]
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum)


//map method
const mappedArr = arr.map(x => x > 2)
console.log(mappedArr)