let age = 10;

let scores = [90, 80, 70, 60, 50];

let isValid = false;

let student = {
    name: "Alice",
    age: 20,
    scores: [95, 85, 75],
    isEnrolled: true
}


let sum = 0;
for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

if (sum / scores.length >= 60 && age >= 18) {
    console.log("Promoted")
} else { 
    console.log("Not Promoted");
}


// if(age < 18 && isValid === false){
//     alert("Not allowed to vote");
// }