// ===== NORMAL FUNCTION =====
// A function is a reusable block of code that performs a specific task
// The 'function' keyword tells JavaScript we are creating a function
// 'Something' is the name of this function (function names should be descriptive)
// The parentheses () can hold parameters (inputs) - in this case, there are no inputs
// The curly braces {} contain the code that will run when we call this function
function Something(){
    // 'return' sends a value back when the function is called
    // 'console.log()' prints a message to the browser's console (useful for debugging)
    // The text "something" is what will be printed to the console
    return console.log("something");
}
// To use this function, you would write: Something()

// ===== ARROW FUNCTION =====
// Arrow functions are a modern, shorter way to write functions in JavaScript
// They use the syntax: const functionName = () => { code here }
// The '=>' symbol (arrow) is what makes it an arrow function
// Arrow functions often considered "better" in modern JavaScript because:
//   1. They have simpler, more concise syntax (less code to write)
//   2. They handle the 'this' keyword more predictably
//   3. They make code cleaner and easier to read
// 'const' means we are creating a variable that won't change
// 'something' is the name/variable that stores this function
const something  =()=>{
    // This does the same thing as the normal function above
    // It prints "something" to the console when called
    return console.log("something");
}
// To use this arrow function, you would write: something()