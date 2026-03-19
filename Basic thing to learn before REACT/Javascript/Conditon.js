

// ===== IF STATEMENT (Normal Conditional) =====
// An if statement allows your code to make decisions
// "if" checks if a condition is true or false
// If true, the code inside the curly braces {} runs
// If false, the code inside the curly braces {} is skipped

let age = 18;  // A variable to store a person's age
let satement;  // A variable to store the result/message

// Check if age is greater than or equal to 18
// >= means "greater than or equal to"
// This condition asks: "Is age 18 or older?"
if (age >= 18) {
    satement = "eligible";  // If true, set the message to "eligible"
    console.log(satement);  // Print the message to the console
}

// ===== LOGICAL AND OPERATOR (&&) =====
// The && (AND) operator means BOTH conditions must be true
// age >= 18 checks if age is 18 or older
// If true, the entire expression returns the value "eligible"
// If false, it returns false
// This is a shorthand way to do an if statement in one line
let _if_ = age >= 18 && "eligible";
console.log(_if_);

// ===== NOT OPERATOR (!) =====
// The ! (NOT) operator flips the truth value
// true becomes false, false becomes true
// age >=! 18 means "is age NOT 18 or older?" (or "is age less than 18?")
if (age >=! 18) {
    console.log("eligible");
}

// ===== LOGICAL OR OPERATOR (||) =====
// The || (OR) operator means AT LEAST ONE condition must be true
// If age >= 18 is true, return "eligible"
// If age >= 18 is false, return "not eligible"
// This is another shorthand way to handle two different outcomes
let if_not = age >= 18 || "not eligible";
console.log(if_not);

// ===== IF-ELSE STATEMENT =====
// if-else lets you handle TWO different paths
// First, check if age >= 18
// If true: run the code in the if block
// If false: run the code in the else block (the backup option)
if (age >= 18) {
    satement = "eligible";  // This code runs if age is 18 or older
    console.log(satement);
}
else {
    satement = "not eligible";  // This code runs if age is less than 18
}

// ===== TERNARY OPERATOR (? :) =====
// The ternary operator is a compact way to write if-else in one line
// Syntax: condition ? valueIfTrue : valueIfFalse
// Read it as: "If condition is true, use the first value, else use the second value"
// This does the same thing as if-else above, but in a shorter way
let if_else = age >= 18 ? "eligible" : "not eligible";
console.log(if_else);
