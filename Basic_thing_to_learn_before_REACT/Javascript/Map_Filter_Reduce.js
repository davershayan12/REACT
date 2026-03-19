let names = ["David" , "James" , "David" , "Danial" ,"Park"]
names.map((name) =>{
  console.log(name);  
});

let names2=names.map((name) =>{
  return "Tom";
});
console.log(names2);

let names3=names.filter((name) => {
    return name !== "David";
})
console.log(names3);