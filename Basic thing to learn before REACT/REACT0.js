//normal function
function Something(){
    return console.log("something");
}

//arrow function 
/* Arrow functions are often considered "better" in modern JavaScript due to their simpler, more concise syntax and more predictable handling of the this keyword. This makes the code cleaner, shorter, and easier to read in most common scenarios. 
 */
const something  =()=>{
    return console.log("something");
}


//normal if
let age= 18;
let satement;
if (age >= 18){
    console.log("eligible");
}

let _if_=age >= 18 && "eligible"
console.log(_if_);

if (age >=! 18){
    console.log("eligible");
}

let if_not= age >= 18 || "not eligible"
console.log(if_not);

let if_else= age >= 18 ? "eligible" : "not eligible"
console.log(if_else);