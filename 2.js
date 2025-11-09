console.log(abc)
var abc = 10;
console.log(abc)



//Lexical Scope
const abc = {
    name: "John",
    age: 30
};


let x = {
    ...abc, nam:"Doe"
}

const { name, ...abc } = x;
console.log(nam, abc);


//map:give updated array
//forEach: no return value

function sum(a) {
    return a + b {
        return a + b;
    };
}
console.log(sum(1)(2));
