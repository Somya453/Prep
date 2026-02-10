let arr=[20,15,14,35,6,51,48]
 
let max = arr[0];

for (let i = 1; i < arr.length; i++){
    if (arr[i] > max)
        max = arr[i];

}
        
    
console.log(max)