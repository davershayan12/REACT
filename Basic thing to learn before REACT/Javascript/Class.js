// ===== CREATING AN OBJECT (Like a data container) =====
// An object is a container that holds related data
// It uses key-value pairs: key is the property name, value is the data
// For example: name is a key, "Daver" is the value
// Objects are created with curly braces {}
const person = {
    name: "Daver",           // String property: stores text
    PersonAge: 19,           // Number property: stores a number
    isMarried: false,        // Boolean property: stores true or false
};

// ===== OLD WAY: Accessing object properties one by one =====
// This was the traditional way to get values from an object
// You would write person.name to get "Daver"
// You would write person.PersonAge to get 19
// This works but requires writing the same code multiple times
/*
const name = person.name
const PersonAge = person.PersonAge
const isMarried = person.isMarried
*/

// ===== NEW WAY: DESTRUCTURING (Modern JavaScript) =====
// Destructuring is a shortcut to extract multiple properties at once
// The curly braces {} here DO NOT create an object - they extract properties!
// This line takes name, PersonAge, and isMarried from the 'person' object
// Now we can use 'name' instead of 'person.name' - much shorter!
const {name, PersonAge , isMarried} = person;


// ===== SPREAD OPERATOR with OBJECTS: Create a copy and modify =====
// The three dots (...) are called the spread operator
// {...person} means: "take all properties from person and copy them here"
// ,name: "David" overwrites the original name with a new value
// This creates a NEW object called person2 (the original 'person' doesn't change)
// This is useful when you want to change data without losing the original
const person2= {...person, name: "David" };

// ===== ARRAYS: Lists of items =====
// An array is a list of items stored together
// Square brackets [] are used to create an array
// Each item is separated by a comma
// Arrays are useful for storing multiple related values
const names = ["James", "Lee", "Danial"];

// ===== SPREAD OPERATOR with ARRAYS: Combine and add items =====
// [...names] means: "copy all items from the names array"
// ,"David" means: "and add 'David' as a new item at the end"
// This creates a NEW array called names2 with all original names plus "David"
// The original 'names' array stays the same (doesn't get modified)
const names2 = [...names, "David"];

